# Portfolio Website - Naveen Gupta

A modern, responsive portfolio website showcasing your professional profile, skills, experience, projects, and education.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and active section highlighting
- **Sections Include**:
  - Hero section with introduction
  - About me with statistics
  - Skills organized by category
  - Work experience timeline
  - Project showcase with links
  - Education and certifications
  - Contact form
  - Social media links

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- JavaScript (Vanilla)
- Font Awesome icons

## Customization Guide

### 1. Update Personal Information

In `index.html`, update the following:

- **Name and Title**: Update the hero section text
- **Email**: Replace `your.email@example.com` with your actual email
- **GitHub**: Replace `https://github.com/yourusername` with your GitHub profile
- **LinkedIn**: Already set to your profile
- **Location**: Update if needed in the contact section

### 2. Update Skills

In the skills section, add or remove skills based on your expertise:
```html
<span class="skill-tag">Your Skill</span>
```

### 3. Update Experience

Modify the timeline items in the experience section with your actual work experience:
- Company names
- Job titles
- Dates
- Responsibilities

### 4. Update Projects

For each project card, update:
- Project name
- Description
- Technologies used
- GitHub repository links
- Live demo links
- Replace placeholder images with actual project screenshots

To add project images:
1. Create an `images` folder in your project directory
2. Add your project images
3. Replace `https://via.placeholder.com/400x250` with `images/your-project-image.jpg`

### 5. Update Education

Modify the education section with your actual educational background:
- Degree
- Institution
- Years
- Certifications

### 6. Setup Contact Form

The current contact form shows an alert on submission. To make it functional:

1. **Using FormSubmit** (Free, no backend needed):
   ```html
   <form class="contact-form" action="https://formsubmit.co/your@email.com" method="POST">
   ```

2. **Using EmailJS** (Free, JavaScript-based):
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Follow their integration guide

3. **Using your own backend**: Implement server-side form handling

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site is live instantly with a custom domain option

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/            # Create this folder for your images
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. Optimize images before uploading (use tools like TinyPNG)
2. Consider lazy loading for images
3. Minify CSS and JavaScript for production
4. Use a CDN for Font Awesome

## Future Enhancements

- Add a blog section
- Integrate with a CMS
- Add dark mode toggle
- Include testimonials section
- Add animation library (e.g., AOS)
- Add loading screen
- Integrate Google Analytics

## License

This project is open source and available under the MIT License.

## Contact

For any questions or suggestions, feel free to reach out:
- LinkedIn: [Naveen Gupta](https://www.linkedin.com/in/naveen-gupta-17042004na/)
- Email: your.email@example.com

---

Made with ❤️ by Naveen Gupta
