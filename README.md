harimations-git.github.io

# Portfolio Website

A modern, responsive portfolio website built with vanilla HTML5, CSS3, and JavaScript. Features interactive carousel components, mobile-first design, and a clean, professional appearance.

## 🎨 Features

- **Responsive Design**: Fully responsive layouts optimized for mobile (450px), tablet (600px), desktop (900px), and ultra-wide displays (1200px+)
- **Interactive Carousels**: Video and image carousel components with keyboard navigation, touch gestures, and button controls
- **Mobile-First Approach**: Built with mobile users in mind, progressively enhanced for larger screens
- **Smooth Animations**: CSS transitions and animations for interactive elements
- **Clean Typography**: Google Fonts integration with hierarchical heading structure
- **Accessible Navigation**: Material Symbols icons and semantic HTML structure
- **Dynamic Media**: Supports embedded videos and image galleries with automatic slide management

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Grid, Flexbox), Vanilla JavaScript
- **Backend**: Express.js 5.2.1 (Node.js)
- **Development**: npm scripts (start, dev)
- **Fonts**: Google Fonts (Montserrat)
- **Icons**: Material Symbols

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Setup

1. **Clone or download the repository**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:3000
   ```

The server runs on port 3000 and serves all files from the `public/` directory as static assets.

## 📂 Project Structure

```
portfolio/
├── server.js              # Express.js server configuration
├── package.json           # Project dependencies and scripts
├── README.md              # This file
├── public/
│   ├── index.html         # Main HTML file
│   ├── ui.css             # All styling and responsive layouts
│   ├── media/             # Images and video assets
│   └── scripts/
│       └── videoBtn.js    # Carousel navigation logic
```

## 🚀 Featured Projects

### MUSH (Multi-User Spatial Habitat)
An interactive multi-user collaborative environment with spatial navigation. Features real-time interaction and persistent state management.
- **Technologies**: [Your tech stack for MUSH]
- **Role**: [Your role/contribution]
- **Status**: [Active/Completed]

### HEdClass (Higher Education Classroom)
A comprehensive educational platform designed for interactive learning experiences. Includes student management, assignment tracking, and collaborative tools.
- **Technologies**: [Your tech stack for HEdClass]
- **Role**: [Your role/contribution]
- **Status**: [Active/Completed]

### 3D Render Engine
A high-performance 3D graphics rendering engine built with modern graphics optimization techniques. Demonstrates advanced rendering pipelines and performance optimization.
- **Technologies**: [Your tech stack for 3D Engine]
- **Role**: [Your role/contribution]
- **Status**: [Active/Completed]

## 💻 Key Components

### Carousel System

The portfolio features interactive carousels for both video and image content. Key features include:

- **Keyboard Navigation**: Use ArrowLeft and ArrowRight to navigate between slides
- **Touch/Swipe Support**: Swipe left/right on mobile to navigate (touch events)
- **Button Navigation**: Previous/Next buttons for each carousel
- **Auto-Pause Videos**: Video playback automatically pauses when navigating away
- **Responsive Sizing**: Carousels adapt sizing based on viewport width
- **Image Scaling**: Images use `object-fit: contain` for proper aspect ratio maintenance

#### Button Controls
- `.video-btn-left`: Navigate to previous slide
- `.video-btn-right`: Navigate to next slide
- Active slide indicated by `.is-active` class with visibility toggling

#### Carousel Navigation (videoBtn.js)
The `show()` function manages slide switching:
- Updates active slide class
- Pauses any playing videos in current slide
- Shows/hides slides with CSS `display` property
- Supports both keyboard and button inputs

### Responsive Breakpoints

The design includes media queries for optimal display at:

- **Mobile**: 450px and 600px breakpoints
  - Stacked layouts with grid-template-areas
  - Single-column project sections
  - Touch-optimized carousel buttons
  
- **Tablet**: 900px breakpoint
  - Two-column layouts where appropriate
  - Increased spacing and font sizes
  
- **Desktop**: 1200px+ 
  - Multi-column layouts
  - Optimized whitespace and typography
  - Full carousel sizing

### Color Scheme

- **Primary Background**: Dark navy/blue (`rgb(14, 39, 74)`)
- **Accent Colors**: Purple and blue gradients
- **Text**: High contrast white on dark backgrounds
- **Highlights**: Blue accents with gradient effects (`rgba(83, 91, 182)`)

## 🎯 Skills & Expertise

This portfolio demonstrates proficiency in:

- **Frontend Development**: HTML5, CSS3 (Grid, Flexbox, Animations), Vanilla JavaScript
- **Responsive Design**: Mobile-first approach with multiple breakpoints
- **User Interaction**: Carousel systems, keyboard/touch event handling
- **Performance**: Optimized animations, lazy loading patterns
- **Web Standards**: Semantic HTML, accessibility considerations
- **Backend**: Express.js server configuration and static file serving

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Navigation Features

### Main Navigation
- Smooth scrolling to page sections
- Mobile-responsive hamburger navigation (if implemented)
- Active section highlighting

### Carousel Controls
- Previous/Next buttons with hover states
- Keyboard arrow key support
- Touch swipe gestures on mobile
- Automatic video pause on slide change

## 📞 Contact & Social

[Add your contact information and social media links here]

- **Email**: [your.email@example.com]
- **GitHub**: [github.com/yourprofile]
- **LinkedIn**: [linkedin.com/in/yourprofile]
- **Twitter**: [@yourhandle]

## 👨‍💼 About

[Add a brief personal bio or professional summary here]

This portfolio showcases my journey in web development, highlighting key projects and technical skills. I'm passionate about creating responsive, user-friendly web experiences with clean, maintainable code.

## 🔮 Future Enhancements

Planned features and improvements:

- **Dark Mode Toggle**: User-selectable color schemes
- **Blog Section**: Technical article publication
- **Project Case Studies**: Detailed project write-ups with development insights
- **Experience Timeline**: Career progression visualization
- **Testimonials Section**: Client/colleague recommendations
- **Email Contact Form**: Functional form with backend integration
- **SEO Optimization**: Meta tags, structured data, sitemap
- **Performance**: Image optimization, lazy loading, code splitting
- **Deployment Pipeline**: Automated CI/CD from git to hosting
- **Analytics**: User interaction tracking and analytics integration

## 📄 License

[Choose a license - MIT, Apache 2.0, GPL, etc., or specify your own terms]

---

**Last Updated**: April 2026

For questions or feedback, please reach out through the contact information above.
