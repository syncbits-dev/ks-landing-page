---
name: phin-landing-page
description: Guidelines and instructions for building the Phin landing page.
---

# Project Skill Guide: Phin Landing Page

This guide is designed for AI coding assistants working on the **Phin Landing Page** repository. It outlines the architectural decisions, design guidelines, layout principles, and store compliance standards required to build a premium, highly responsive landing page.

---

## 🛠️ Technology Stack & Architecture

- **Core**: Vanilla HTML5 (semantic structure) & Vanilla JavaScript (ES6+ for interactive logic).
- **Styling**: Vanilla CSS3 (custom properties/variables, modern grid/flexbox layouts, responsive design).
- **Assets**: Curated CSS transitions, modern SVG icons, and Google Fonts (Inter/Outfit).
- **Dependencies**: Zero external frameworks or heavy libraries (keeping the page fast, secure, and easy to maintain).

---

## 🎨 Visual Identity & Styling Guidelines

The landing page must look premium, modern, and trustworthy. It should feature a clean, professional dark-to-light theme matching a modern SaaS workforce app.

### Design Tokens (CSS Variables):
- **Primary Color**: Indigo (`#4f46e5` / `rgb(79, 70, 229)`)
- **Secondary Color**: Cyan (`#06b6d4` / `rgb(6, 182, 212)`)
- **Background**: Deep Slate (`#0f172a` / `rgb(15, 23, 42)`)
- **Text Color**: Light Grey (`#f8fafc` / `rgb(248, 250, 252)`) for dark areas, and Dark Slate (`#1e293b` / `rgb(30, 41, 59)`) for light areas.
- **Typography**: `Inter`, sans-serif (loaded from Google Fonts).

### Guidelines:
1. **Glassmorphism**: Use backdrop-filter blur effects (`backdrop-filter: blur(12px)`) for the header and card overlays to create depth.
2. **Micro-Animations**: Add subtle hover transitions (e.g., `transform: translateY(-4px)`, `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`) for buttons, links, and feature cards.
3. **No Placeholders**: Ensure all sections contain realistic copy and icons. Avoid generic "lorem ipsum" text.

---

## 📱 App Store & Google Play Compliance

To guarantee approval from Apple and Google review teams, the website must contain specific information and pages:

1. **Privacy Policy (`privacy.html`)**:
   - Clear declaration of data collection, including location tracking details (needed for timesheets).
   - Easy-to-understand sections on user rights (GDPR, CCPA).
2. **Terms of Service (`terms.html`)**:
   - Clear terms of use for the workforce scheduling app.
   - Liability limitations and user obligations.
3. **Support & Contact (`support.html`)**:
   - A fully functional or mock contact form.
   - Direct support email address (e.g., `support@phin.com`).
   - FAQ section answering common user questions (getting started, resetting passwords, scheduling shifts).

---

## ⚙️ Interactive Features

1. **Mobile Menu**: Responsive hamburger menu that slides or fades in smoothly using CSS transitions.
2. **Interactive Shift Scheduler Preview**:
   - A mini mock-up of the scheduling calendar.
   - Allows users to drag, drop, or click on mock shifts to see how easy scheduling is in Phin.
   - Pure HTML/CSS/JS without external drag-and-drop libraries to keep the landing page lightweight.
3. **Contact Form**: Interactive validation and user success messages upon form submission.

---

## 📝 Best Practices Checklist for AI

- [ ] **SEO optimization**: Provide proper meta descriptions, Open Graph (OG) tags, and structured heading hierarchy (only one `<h1>` per page).
- [ ] **Accessibility (a11y)**: Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`), specify image alt descriptions, and ensure proper color contrast.
- [ ] **Responsive Design**: Test layouts down to `320px` width. All grid systems should stack gracefully on mobile screens.
- [ ] **No Dead Links**: Every link in the navigation header and footer must lead to a valid page or section anchor.
