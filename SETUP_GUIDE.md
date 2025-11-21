# Portfolio Setup Guide

## Quick Start Checklist

### 1. Environment Variables Setup
Create a `.env` file in the `portfolio` directory (copy from `env.example`):

```bash
# Windows
copy env.example .env

# Linux/Mac
cp env.example .env
```

Then edit `.env` and add your credentials:
```env
REACT_APP_GITHUB_TOKEN = "your_github_token_here"
GITHUB_USERNAME = "your_github_username"
USE_GITHUB_DATA = "true"
MEDIUM_USERNAME = "your_medium_username"  # Optional
```

**How to get GitHub Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (no scopes needed for public repos)
3. Copy the token and paste it in `.env`

### 2. Personalize Your Portfolio

Edit `src/portfolio.js` and update:

#### Basic Information
- **greeting**: Your name, title, and description
- **socialMediaLinks**: All your social media profiles
- **contactInfo**: Your email and phone number

#### Skills Section
- Update `skillsSection.skills` with your skills description
- Update `skillsSection.softwareSkills` with technologies you know
- Use Font Awesome class names: https://fontawesome.com/icons

#### Education
- Update `educationInfo.schools` with your education history
- Add your school logos to `src/assets/images/`

#### Work Experience
- Update `workExperiences.experience` with your job history
- Add company logos to `src/assets/images/`

#### Projects
- Update `bigProjects.projects` with your major projects
- Add project images to `src/assets/images/`

#### Achievements
- Update `achievementSection.achievementsCards` with your certifications and awards

#### Blogs
- Set `displayMediumBlogs: "true"` to fetch from Medium
- Or update `blogSection.blogs` with your blog posts manually

### 3. Update Resume
Replace `src/containers/greeting/resume.pdf` with your own resume PDF.

### 4. Customize Colors
Edit `src/_globalColor.scss` to change the color scheme globally.

### 5. Update Meta Tags
Edit `public/index.html` to update:
- Page title
- Meta descriptions
- Open Graph tags for social sharing

### 6. Install Dependencies & Run

```bash
cd portfolio
npm install
npm start
```

The app will open at `http://localhost:3000`

### 7. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### 8. Deploy

#### Deploy to GitHub Pages:
1. Update `homepage` in `package.json` with your GitHub Pages URL
2. Run `npm run deploy`

#### Deploy to Netlify/Vercel:
1. Push your code to GitHub
2. Import the repository in Netlify/Vercel
3. Add environment variables in the platform settings
4. Deploy!

## Sections You Can Hide

Set `display: false` in any section to hide it:
- `skillsSection.display = false`
- `educationInfo.display = false`
- `workExperiences.display = false`
- `bigProjects.display = false`
- `achievementSection.display = false`
- `blogSection.display = false`
- `talkSection.display = false`
- `podcastSection.display = false`
- `twitterDetails.display = false`

## Need Help?

- Check the main README.md for more details
- Visit the original template: https://github.com/saadpasta/developerFolio
- Font Awesome icons: https://fontawesome.com/icons
- Lottie animations: https://lottiefiles.com/

Happy coding! 🚀

