# Madhura Shanthini - Attorney CV Portfolio

An elegant, attorney-themed CV web application showcasing the professional profile of Madhura Shanthini, Senior Associate at KRIA Law.

## 🌐 Live Demo

Visit the live portfolio at: `https://yourusername.github.io/mdu-portfolio`

## 🎨 Features

- **Professional Design**: Navy blue and gold color scheme with legal-themed styling
- **Interactive Elements**: Smooth scrolling, fade-in animations, and hover effects
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Attorney Theme**: Scales of justice icons and professional legal aesthetics
- **Comprehensive Sections**: Experience, Education, Certifications, Awards, and Skills

## 📁 Project Structure

```
mdu-portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript interactions
├── persona.txt         # Source data
└── README.md          # This file
```

## 🚀 Hosting on GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it `mdu-portfolio` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Files to GitHub

#### Option A: Using Git Command Line

```bash
# Navigate to your project directory
cd /Users/mrbad/Documents/Projects/mdu-portfolio

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Attorney-themed CV web app

🎯 Features:
- Professional attorney-themed design
- Interactive animations and smooth scrolling
- Responsive layout for all devices
- Comprehensive professional profile

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Add your GitHub repository as remote (replace with your actual repository URL)
git remote add origin https://github.com/yourusername/mdu-portfolio.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. In your new GitHub repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add commit message: "Add attorney-themed CV files"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. In your GitHub repository, go to **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under **Source**, select:
   - Source: "Deploy from a branch"
   - Branch: "main" (or "master")
   - Folder: "/ (root)"
4. Click **Save**

### Step 4: Access Your Live Site

- GitHub will provide a URL like: `https://yourusername.github.io/mdu-portfolio`
- It may take 5-10 minutes for the site to be available
- The site will automatically update when you push changes to the repository

## 🔧 Customization

### Update Contact Information

Edit the contact details in `index.html`:

```html
<div class="contact-info">
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>your.email@example.com</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+91 98765 43210</span>
    </div>
</div>
```

### Modify Colors

Update the color scheme in `styles.css`:

```css
:root {
    --primary-gold: #D4AF37;    /* Main accent color */
    --navy-blue: #1e2a4a;       /* Primary dark color */
    --cream: #f8f6f0;           /* Background color */
}
```

### Add Social Links

Add social media links to the contact section:

```html
<div class="social-links">
    <a href="https://linkedin.com/in/yourprofile" target="_blank">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="mailto:your.email@example.com">
        <i class="fas fa-envelope"></i>
    </a>
</div>
```

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Accessible design with ARIA labels
- Print-friendly CSS

## 📞 Support

For technical issues or customization requests, create an issue in this repository.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ⚖️ by Claude Code**