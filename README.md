# Developer Intro Card - Premium Portfolio

A premium, MAANG-tier developer portfolio and identity card designed for Software Engineers to showcase their impact, skills, and projects to top-tier recruiters and engineering managers.

This project was engineered with a focus on **performance**, **clean aesthetics**, and **impact-driven content**. It departs from traditional clunky portfolios by acting as a highly polished, single-page product landing page.

---

## 🏗️ Architecture & Technology Stack

The project is built on a modern, lightning-fast frontend stack:

- **React 18:** Component-based UI rendering.
- **Vite:** Next-generation frontend tooling for instantaneous hot module replacement (HMR) and highly optimized production builds.
- **Tailwind CSS v4:** Utility-first CSS framework for rapid, highly customizable styling. Uses the new `@tailwindcss/vite` plugin for optimal performance.
- **Framer Motion:** Production-ready animation library used for orchestrating smooth, hardware-accelerated entrance and scroll animations (`whileInView`).
- **Lucide React:** Clean, consistent, and customizable SVG icon set.

## 📂 Project Structure

The codebase was explicitly refactored from a monolithic file into a scalable, modular architecture:

```text
intro-card/
├── public/                 # Static assets (Favicon, Profile Image)
│   ├── favicon.svg         # Custom SVG logo
│   └── profile.png         # Your professional headshot
├── src/
│   ├── components/         # Modular UI Sections
│   │   ├── ui/             # Reusable micro-components (Icons, Badges)
│   │   │   └── Icons.jsx   # Custom SVG icons (e.g., GitHub, LinkedIn)
│   │   ├── Hero.jsx        # Landing section (Photo, Title, CTA Buttons)
│   │   ├── Impact.jsx      # Engineering achievements & metrics
│   │   ├── FeaturedWork.jsx# Top 3 highest-impact projects
│   │   ├── TechStack.jsx   # Bento-box grid of categorized technical skills
│   │   ├── Experience.jsx  # Left-aligned professional timeline
│   │   └── Footer.jsx      # Final CTA & Copy Email functionality
│   ├── App.jsx             # Main application assembly & layout wrapper
│   ├── index.css           # Global Tailwind configurations & dark theme
│   ├── main.jsx            # React DOM entry point
│   └── utils.js            # Utility functions (e.g., tailwind-merge/clsx)
├── index.html              # HTML entry point with SEO meta tags
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite configuration including Tailwind plugin
```

## ✨ Design Philosophy

The aesthetic is inspired by top-tier tech companies (Apple, Stripe, Linear). 

- **Dark-First Theme:** Utilizing deep `zinc-950` backgrounds with `indigo` accents to reduce eye strain and look premium.
- **Glassmorphism:** Subtle use of `backdrop-blur` and semi-transparent backgrounds to create depth without visual clutter.
- **Micro-Interactions:** Buttons and cards feature slight lift (`hover:-translate-y-2`) and glow effects upon hovering to make the UI feel alive.
- **Impact-Driven Copy:** Sections like "Engineering Impact" prioritize measurable numbers (e.g., "20-30% latency cut") over generic descriptions.

## 🚀 How to Run Locally

1. **Install Dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/` (or similar port).

3. **Build for Production:**
   To generate highly minified static files ready for deployment:
   ```bash
   npm run build
   ```
   This creates a `dist` folder containing your optimized site.

## 🌍 Deployment

Because this is a static Vite application, deployment is entirely frictionless.

**To GitHub Pages:**
1. Push your code to a GitHub repository.
2. In the repository settings, go to **Pages**.
3. Set the source to GitHub Actions and use the standard Vite deployment workflow.

**To Netlify or Vercel:**
1. Connect your GitHub repository to Netlify/Vercel.
2. The platform will auto-detect Vite. 
3. It will use `npm run build` as the build command and `dist` as the publish directory. Deployment takes under 60 seconds.

## 🛠️ Customization Guide

- **Profile Picture:** Replace `public/profile.png` with your new image.
- **Resume Link:** Open `src/components/Hero.jsx` and replace the `href="#"` under the "View Resume" button with your Google Drive or PDF link.
- **Colors:** You can change the primary accent color globally by modifying the tailwind classes (e.g., replacing `indigo-500` with `blue-500` across components) or updating `index.css`.
