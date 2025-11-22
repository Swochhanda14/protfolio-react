/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// About Me Section
const aboutMeSection = {
  title: "About Me",
  subtitle:
    "Designer turned developer — I blend UX and clean code to build polished, fast, and accessible experiences.",
  profileImage: require("./assets/images/swox.jpeg"),
  imageAlt: "Profile",
  description: [
    "I'm a Graphic Designer and Frontend Developer who enjoys turning ideas into intuitive, pixel-perfect interfaces.",
    "I work with React, JavaScript, HTML/CSS, and Sass — and design using Figma, Photoshop, and Illustrator. My focus is on usability, performance, and responsive design across devices.",
    "Beyond UI, I care about accessibility and maintainable code. I translate design systems into reusable components and ship clean, scalable front-end.",
    "When I'm not building, I'm learning SEO, exploring animations, and refining micro-interactions to elevate user experience."
  ],
  website: "https://swochhandak.com.np/",
  display: true
};

const greeting = {
  username: "SwocXanda", // Change to your name
  title: "Hi all, I'm Swochhanda Karanjeet", // Change to your greeting
  subTitle: emoji(
    "A passionate Graphic Designer & Frontend Developer 🚀 having an experience of building Web application Using Reactjs and Designing Using Figma/Photoshop/Illustrator."
  ), // Update with your description
  resumeLink:
    "https://drive.google.com/file/d/18Xb49UZoKBpeVktEQOE8oiJScqGLkWsg/view", // Add your resume link (Google Drive, Dropbox, etc.) or leave empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Swochhanda14", // Update with your GitHub username
  linkedin: "https://www.linkedin.com/in/swocxanda-karanjeet-91868021b/", // Update with your LinkedIn profile
  gmail: "", // Update with your email
  gitlab: "", // Optional: Add your GitLab profile
  facebook: "https://www.facebook.com/swocxanda.karanjeet", // Optional: Add your Facebook profile
  medium: "", // Optional: Add your Medium profile
  instagram: "https://www.instagram.com/swoc_xanda/", // Optional: Add your Instagram profile
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONTEND DEVELOPER & GRAPHIC DESIGNER WHO WANTS TO EXPLORE EVERY INDUSTRY",
  skills: [
    emoji(
      "🎨 Create visually appealing and user-friendly UI/UX designs for web and mobile applications"
    ),
    emoji(
      "⚡ Develop responsive Front-End interfaces using HTML, CSS, JavaScript, and React"
    ),
    emoji(
      "🖌 Design graphics, branding, and digital assets with tools like Photoshop, Illustrator, and Figma"
    ),
    emoji("📐 Convert design prototypes into interactive, pixel-perfect code")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Front-End Development
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },

    // Back-End / PHP
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },

    // Design / Graphics
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Adobe Photoshop",
      useAdobeLogo: true
    },
    {
      skillName: "Adobe Illustrator",
      useAdobeLogo: true
    },
    {
      skillName: "Adobe XD",
      useAdobeLogo: true
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Celebration CO-Ed School",
      logo: require("./assets/images/1.jfif"),
      subHeader: "Secondary Level",
      duration: "Jan 2005 - Dec 2018",
      desc: "School Level Activities and Competitions.",
      descBullets: []
    },
    {
      schoolName: "The Kist College & SS",
      logo: require("./assets/images/2.png"),
      subHeader: "Higher Level (+2)",
      duration: "September 2018 - April 2020",
      desc: "Higher Level Activities and Competitions.",
      descBullets: []
    },
    {
      schoolName: "St.Lawrence College",
      logo: require("./assets/images/3.png"),
      subHeader: "Bachelor in Computer Application",
      duration: "September 2022 - April 2026",
      desc: "Took courses about Software Designing, Graphic designing, Web Security, Operating Systems, ...",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS/JS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Reactsjs",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend/PHP/Laravel",
      progressPercentage: "40%"
    },
    {
      Stack: "Graphic Designing",
      progressPercentage: "90%"
    }
  ],

  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set true to show this section as "Internships & Training"
  experience: [
    {
      role: "Front-End Developer Intern",
      company: "Udemy Academy",
      companylogo: require("./assets/images/8.jpg"),
      date: "June 2024 - August 2024",
      desc: "Completed internship focusing on HTML, CSS, JavaScript, and React projects. Gained hands-on experience building responsive websites.",
      descBullets: [
        "Developed interactive UI components using React",
        "Converted Figma designs into pixel-perfect web pages",
        "Learned project workflow using Git and GitHub"
      ]
    },
    {
      role: "Graphic Design Intern",
      company: "Animax Animation Academy",
      companylogo: require("./assets/images/9.jfif"),
      date: "September 2024 - December 2024",
      desc: "Worked on digital graphics, branding, and UI/UX design for web and mobile applications.",
      descBullets: [
        "Designed UI/UX prototypes using Figma and Adobe XD",
        "Created graphics and branding assets in Photoshop and Illustrator",
        "Collaborated with developers to implement designs"
      ]
    },
    {
      role: "SEO Certification",
      company: "EDGO Education",
      companylogo: require("./assets/images/10.png"),
      date: "January 2025 - April 2025",
      desc: "Completed SEO certification, learning on-page, off-page, and technical SEO techniques to improve website ranking."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "MyProjects",
  subtitle:
    "SOME Project I Built Using Reactjs/HTML/CSS &Laravel framework and Designing Using Figma/Photoshop/Illustrator.",
  projects: [
    {
      image: require("./assets/images/55.png"),
      projectName: "Dreamy Rental",
      projectDesc:
        "A user-friendly platform that simplifies room rentals by connecting renters with admins, offering easy search, filtering, and seamless booking.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Swochhanda14/Dreamyrental" // replace with actual URL if available
        }
      ]
    },
    {
      image: require("./assets/images/7.png"),
      projectName: "Attendance Management System",
      projectDesc:
        "A modern platform for educational institutions that automates attendance tracking, provides real-time updates, and generates detailed reports for students and teachers.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Swochhanda14/AMS" // replace with actual URL or leave "#" if none
        }
      ]
    },
    {
      image: require("./assets/images/6.png"),
      projectName: "Easy Leave (Employee Leave Management System)",
      projectDesc:
        "An intuitive intranet-based system for employees and managers to submit, track, and approve leave requests efficiently, streamlining company workflows.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Swochhanda14/ELMS" // replace with actual URL or leave "#" if none
        }
      ]
    },
    {
      image: require("./assets/images/4.png"),
      projectName: "BrewBox",
      projectDesc:
        "A full-stack e-commerce platform for coffee enthusiasts, offering customizable orders, flexible subscriptions, and a seamless, responsive user experience.",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/Swochhanda14/brewbox_laravel12" // replace with actual URL if available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Front-End Developer Certification",
      subtitle:
        "Completed an Course in Front-End Development, gaining hands-on experience with HTML, CSS, JavaScript, and React.",
      image: require("./assets/images/u8.jpg"),
      imageAlt: "Front-End Internship Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "#" // Replace with your certificate link
        }
      ]
    },
    {
      title: "Graphic Designer Certification",
      subtitle:
        "Completed a Graphic Design Course, mastering UI/UX, digital graphics, and branding design tools.",
      image: require("./assets/images/c1.jpg"),
      imageAlt: "Graphic Design Internship Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "#" // Replace with your certificate link
        }
      ]
    },
    {
      title: "SEO Certification",
      subtitle:
        "Earned an SEO certification to optimize websites and improve search engine rankings effectively.",
      image: require("./assets/images/10.png"),
      imageAlt: "SEO Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "#" // Replace with your certificate link
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Building, learning, and sharing—my journey as a developer and designer.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      image: require("./assets/images/5.png"),
      projectName: "Dreamy Rental",
      projectDesc:
        "A user-friendly platform that simplifies room rentals by connecting renters with admins, offering easy search, filtering, and seamless booking.",
      footerLink: [
        {name: "Visit Website", url: "#"}, // replace with actual
        {
          name: "Tutorial I Followed",
          url: "https://www.youtube.com/watch?v=2z_HaJ2xW9Y&list=PLSJxovi1IyDGFdKsGGFJbYMY-mAASXNZw"
        } // replace with actual
      ]
    },
    {
      image: require("./assets/images/7.png"),
      projectName: "Attendance Management System",
      projectDesc:
        "A modern platform for educational institutions that automates attendance tracking, provides real-time updates, and generates detailed reports for students and teachers.",
      footerLink: [
        {name: "View Project", url: "#"}, // replace with actual
        {
          name: "Tutorial I Followed",
          url: "https://www.youtube.com/watch?v=I1ZZT_fw-xU&list=PLJ4-ETiGBrdOZ4kvbzNGidD26M24BLImM"
        } // replace with actual
      ]
    },
    {
      image: require("./assets/images/6.png"),
      projectName: "Easy Leave (Employee Leave Management)",
      projectDesc:
        "An intuitive intranet-based system for employees and managers to submit, track, and approve leave requests efficiently, streamlining company workflows.",
      footerLink: [
        {name: "View Project", url: "#"}, // replace with actual
        {
          name: "Tutorial I Followed",
          url: "https://www.youtube.com/watch?v=g8Qub6twpX4"
        } // replace with actual
      ]
    },
    {
      image: require("./assets/images/4.png"),
      projectName: "BrewBox",
      projectDesc:
        "A full-stack e-commerce platform for coffee enthusiasts, offering customizable orders, flexible subscriptions, and a seamless, responsive user experience.",
      footerLink: [
        {name: "Visit Website", url: "#"}, // replace with actual
        {
          name: "Tutorial I Followed",
          url: "https://www.youtube.com/watch?v=731wley-JfM&list=PLRB0wzP8AS_GMe_1P-hAZOYjn-a2CdhWA&index=1"
        } // replace with actual
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+977-9863422162", // Update with your phone number (optional)
  email_address: "swochhanda14@gmail.com" // Update with your email
};

// Twitter Section

const twitterDetails = {
  userName: "", // Replace with your Twitter username without @ (leave empty to hide)
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  aboutMeSection,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
