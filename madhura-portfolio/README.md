# Madhura Shanthini - Legal Professional Portfolio

A modern, elegant portfolio website for Madhura Shanthini, a privacy law expert and legal professional based in Chennai, India. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

### 🎨 Design & UI
- **Golden Yellow, Black & White Theme**: Professional legal-themed color scheme
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Elegant Typography**: Custom fonts (Playfair Display + Inter) for professional appeal
- **Smooth Animations**: Engaging scroll animations and interactive elements
- **Creative Layout**: Modern, attorney-focused design elements

### 📱 Sections
- **Hero Section**: Professional introduction with featured blog posts carousel
- **Work Experience**: Detailed career history, achievements, and awards
- **Skills & Expertise**: Interactive skill categories with progress indicators
- **Volunteering**: Social impact work with Bhumi NGO
- **Contact Information**: Professional contact form and details

### 🔧 Admin Dashboard
- **Secure Login**: Password-protected admin access (`/admin`)
- **Blog Management**: Create, edit, delete, and manage blog posts
- **Markdown Support**: Rich content creation with markdown
- **Top Posts Control**: Manually set top 3 featured posts for homepage
- **Publish/Draft Toggle**: Control post visibility
- **Analytics Dashboard**: Overview of posts, published content, and drafts

### 🚀 SEO Optimization
- **Target Keywords**: Optimized for "madhura", "shanthini", "privacy", "chennai"
- **Meta Tags**: Comprehensive social media and search engine optimization
- **Schema Markup**: Structured data for better search visibility
- **Open Graph**: Social media sharing optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Emoji-based icons for universal compatibility

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd madhura-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔐 Admin Access

- **URL**: `/admin`
- **Demo Password**: `admin123`
- **Features**:
  - Manage blog posts
  - Set featured posts
  - Publish/unpublish content
  - View analytics

## 📁 Project Structure

```
madhura-portfolio/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard
│   │   ├── globals.css      # Global styles with custom theme
│   │   ├── layout.tsx       # Root layout with SEO optimization
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── HeroSection.tsx      # Hero with blog carousel
│       ├── WorkSection.tsx      # Experience & achievements
│       ├── SkillsSection.tsx    # Skills & certifications
│       ├── VolunteeringSection.tsx # Social impact
│       ├── ContactSection.tsx   # Contact form
│       ├── Navigation.tsx       # Header navigation
│       └── Footer.tsx          # Footer with links
├── tailwind.config.ts     # Tailwind configuration with custom colors
└── package.json          # Dependencies
```

## 🎨 Color Scheme

```css
/* Primary Colors */
--primary: #f59e0b         /* Golden Yellow */
--secondary: #000000       /* Black */
--background: #ffffff      /* White */

/* Golden Palette */
--golden-50: #fffbeb
--golden-100: #fef3c7
--golden-400: #fbbf24
--golden-600: #d97706
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## 🔧 Customization

### Update Content
- Modify personal information in components
- Update contact details in `ContactSection.tsx`
- Change professional details in `WorkSection.tsx`

### Styling
- Colors: Update `tailwind.config.ts`
- Fonts: Modify in `layout.tsx`
- Components: Edit individual component files

### SEO
- Update metadata in `layout.tsx`
- Modify schema markup for search engines

## 📞 Support

For questions or support:
- **Email**: madhurashanthini@gmail.com
- **LinkedIn**: [linkedin.com/in/madhura-shanthini](https://www.linkedin.com/in/madhura-shanthini/)

---

**Built with ⚖️ for legal professionals**
