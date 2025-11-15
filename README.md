# 🌐 **Vedant Bende – Portfolio 3.0**

Welcome to **Portfolio 3.0**, my advanced, cinematic, and desktop-optimized developer portfolio built using **Vue.js 3**, **Vite**, **Vuetify**, **GSAP**, and **Locomotive Scroll**.

This portfolio is designed to deliver an immersive, animation-driven, highly interactive experience demonstrating my engineering strengths in **Frontend Development**, **Animations**, and **Advanced UI/UX**.

---

## 🧑‍💻 About Me

I’m **Vedant Bende**, an AI & Web Developer focused on creating structured, interactive, and technically refined user interfaces.
Portfolio 3.0 demonstrates my approach to:

* clean engineering practices
* structured UI layouts
* controlled animations
* component-based development

Every section is carefully crafted to show not just *what I build*, but *how I build it*.

---

## ✨ Live Preview

🔗 [View Portfolio Live](https://vedant-bende-portfolio-3.vercel.app/)

---

## ✨ Features

* 🎬 **Scroll-Triggered Canvas Animation** with GSAP + ScrollTrigger
* 🌀 **Locomotive Scroll Integration** for buttery-smooth scrolling
* 🎧 **Background Music Player** with volume slider, mute toggle, and autoplay optimization
* 🖥️ **Desktop-Exclusive Experience** (mobile access disabled intentionally)
* 🎨 Polished Vuetify-powered UI components
* 🧩 Fully componentized architecture for scalability
* 🚀 Modular sections (Hero, Vision, Projects, Skills, Experience, Contact)
* 🖱️ Smooth parallax, sequence-loading animation, and layered visuals
* ⭐ High-performance rendering optimized for desktop GPUs

---

## 🏗️ Project Structure

Your Portfolio 3.0:

```
portfolio-3.0/
├── public/
│   ├── Logo.svg                 # Main logo
│   ├── resume/
│   │   └── Vedant_Bende_Resume.pdf
│   ├── videos/
│   │   └── hero-background.mp4 # Background soundtrack
│   ├── frames/                  # Frame-by-frame animation images
│   │   ├── 0.png
│   │   ├── 1.png
│   │   └── ...
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── animation/
│   │   │   ├── FixedCanvas.vue      # Canvas renderer for frame sequence
│   │   │   ├── ParallaxText.vue     # Parallax scrolling text effect
│   │   │   └── ScrollSequence.vue   # GSAP scroll-trigger animation controller
│   │   ├── common/
│   │   │   ├── DeviceBlocker.vue    # Blocks mobile/tablet devices
│   │   │   ├── Footer.vue
│   │   │   ├── Navbar.vue           # Music player + navigation
│   │   │   └── ...
│   │   ├── ui/                  # Shared UI components
│   │   │   ├── ButtonPrimary.vue
│   │   │   └── SectionHeading.vue
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── MainLayout.vue           # Global layout wrapper
│   │
│   ├── plugins/
│   │   └── vuetify.js               # Vuetify initialization
│   │
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── VisionSection.vue
│   │   ├── ProjectsSection.vue
│   │   ├── SkillsSection.vue
│   │   ├── ExperienceSection.vue
│   │   └── ContactSection.vue
│   │
│   ├── store/
│   │   ├── portfolio.js             # Global project/skills/experience data
│   │   └── canvas.js                # Animation + frame state
│   │
│   ├── styles/
│   │   └── globals.css              # Global desktop styles
│   │
│   ├── utils/
│   │   ├── locomotive.js            # Smooth scroll initializer
│   │   └── gsapHelpers.js           # GSAP helpers for sequence animation
│   │
│   ├── App.vue                      # Root Vue application
│   ├── main.js                      # App entry point
│   └── vite.config.js               # Build configuration
│
├── package.json
├── README.md                        # Project documentation
└── ...
```

---

## 🛠️ Technologies Used

| Technology               | Description                         |
| ------------------------ | ----------------------------------- |
| **Vue.js 3**             | Modern reactive JS framework        |
| **Vite**                 | Next-gen frontend build tool        |
| **Vuetify 3**            | Material UI Framework               |
| **GSAP + ScrollTrigger** | High-performance animations         |
| **Locomotive Scroll**    | Smooth scroller for cinematic pages |
| **Canvas API**           | Frame-by-frame graphic rendering    |
| **Pinia**                | Lightweight global state store      |
| **CSS3**                 | Responsive desktop-first styling    |

---

## ⚙️ Installation & Local Setup

1. Clone the repository:

```bash
git clone https://github.com/VedantBende/Portfolio-3.0.git
cd Portfolio-3.0
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the local server URL shown in the terminal.

---

## 🧭 Usage Guide

### 🎬 Canvas Animation

* Automatically plays as the user scrolls
* Sequence controlled via **ScrollSequence.vue**
* Frames stored in `/public/frames/`

### 🌀 Locomotive Scroll

* Handles smooth scrolling
* Syncs with GSAP using proxy scroll positions

### 🔗 Navigation

* Smooth scroll between all major sections
* Clean Vuetify-powered UI

---

## 🎨 Customization

### 🔧 Editing Content

All text and info (projects, skills, timeline) live in:

```
src/store/portfolio.js
```

Update this file to instantly change:

* skills
* projects
* experience
* social links
* descriptions

### 🖼️ Canvas Frames

Place new frames in:

```
public/frames/
```

Update sequence count inside **ScrollSequence.vue** if changed.

### 🎥 Background Video

Replace:

```
public/videos/hero-background.mp4
```

with your own background.

### 🎨 Theme / Styles

Edit global styles in:

```
src/styles/globals.css
```

---

## 🚀 Deployment

This project is fully deployable on:

* **Vercel** (Recommended)
* Netlify
* GitHub Pages
* Cloudflare Pages

Build your site:

```bash
npm run build
```

Preview locally:

```bash
npm run preview
```

Upload the `dist/` folder to your hosting provider.

---

## 🙏 Credits

* **GSAP** for animations
* **Locomotive Scroll** for smooth scrolling
* **Vuetify** for UI components
* **Inter Font** (Google Fonts)
* All custom visuals & design belonging to **Vedant Bende**

---

## 📫 Contact

Let’s connect and build something remarkable.

* 📧 Email: **[vedantbende2121@gmail.com](mailto:vedantbende2121@gmail.com)**
* 💼 LinkedIn: **[https://www.linkedin.com/in/vedant-bende-3aa28b2a8](https://www.linkedin.com/in/vedant-bende-3aa28b2a8)**
* 🧑‍💻 GitHub: **[https://github.com/VedantBende](https://github.com/VedantBende)**

---

## 📜 License

This project is **not open source**.
It is protected under copyright and intended solely as my personal portfolio.

You **may not copy, modify, redistribute, or reuse** any part of this code or design without my explicit written permission.

All rights reserved © **Vedant Bende**.

---