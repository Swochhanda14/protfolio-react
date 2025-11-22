fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

// Helper function to clean and validate environment variable values
const cleanEnvValue = value => {
  if (!value) return "";
  // Remove comments (everything after #)
  const cleaned = value.split("#")[0].trim();
  // Remove quotes if present
  return cleaned.replace(/^["']|["']$/g, "").trim();
};

// Helper function to check if a value is a placeholder
const isPlaceholder = value => {
  const cleaned = cleanEnvValue(value);
  if (!cleaned) return true;
  const placeholderPatterns = [
    /YOUR.*USERNAME.*HERE/i,
    /YOUR.*TOKEN.*HERE/i,
    /your.*username/i,
    /your.*token/i,
    /^[\s]*$/
  ];
  return placeholderPatterns.some(pattern => pattern.test(cleaned));
};

const GITHUB_TOKEN = cleanEnvValue(process.env.REACT_APP_GITHUB_TOKEN || "");
const GITHUB_USERNAME = cleanEnvValue(process.env.GITHUB_USERNAME || "");
const USE_GITHUB_DATA = cleanEnvValue(process.env.USE_GITHUB_DATA || "");
const MEDIUM_USERNAME = cleanEnvValue(process.env.MEDIUM_USERNAME || "");

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined || isPlaceholder(GITHUB_USERNAME)) {
    console.log(
      "⚠️  GitHub username not configured. Skipping GitHub data fetch."
    );
    console.log(
      "   Please update your .env file with a valid GITHUB_USERNAME and REACT_APP_GITHUB_TOKEN"
    );
  } else if (isPlaceholder(GITHUB_TOKEN)) {
    console.log("⚠️  GitHub token not configured. Skipping GitHub data fetch.");
    console.log(
      "   Please update your .env file with a valid REACT_APP_GITHUB_TOKEN"
    );
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    var data = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });
    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(default_options, res => {
      let data = "";

      console.log(`statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        throw new Error(ERR.requestFailed);
      }

      res.on("data", d => {
        data += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/profile.json", data, function (err) {
          if (err) return console.log(err);
          console.log("saved file to public/profile.json");
        });
      });
    });

    req.on("error", error => {
      throw error;
    });

    req.write(data);
    req.end();
  }
}

if (MEDIUM_USERNAME && !isPlaceholder(MEDIUM_USERNAME)) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  // Encode the Medium username to handle special characters
  const encodedUsername = encodeURIComponent(MEDIUM_USERNAME);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodedUsername}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.log(
        "⚠️  Medium blogs fetch failed. This is okay if you don't have a Medium account."
      );
      console.log("   Status code:", res.statusCode);
      // Don't throw error, just skip
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.log(
      "⚠️  Medium blogs fetch error. This is okay if you don't use Medium."
    );
    console.log("   Error:", error.message);
    // Don't throw error, just skip
  });

  req.end();
} else {
  console.log(
    "ℹ️  Medium username not configured. Skipping Medium blogs fetch."
  );
  console.log("   (This is normal if you don't use Medium)");
}
