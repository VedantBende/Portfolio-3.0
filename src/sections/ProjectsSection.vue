<template>
  <section id="page2" class="page2" data-scroll-section>
    <div class="parallax-layer layer-1" data-scroll data-scroll-speed="1"></div>
    <div class="parallax-layer layer-2" data-scroll data-scroll-speed="2"></div>
    <div class="projects-wrapper">
      <div id="title-text">
        <h3>VEDANT BENDE / PROJECTS</h3>
        <h1>
          SHOWCASE<br>
          OF WORK<br>
          & CREATIVITY
        </h1>
      </div>
      
      <div id="projects-list">
        <div v-for="(project, index) in projects" 
             :key="index" 
             class="project-item"
             :class="{ 'align-right': index % 2 === 0, 'align-left': index % 2 !== 0 }">
          <v-icon :icon="project.icon" class="project-icon" :color="project.iconColor"></v-icon>
          <h2>{{ project.title }}</h2>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-skills">
            <span v-for="(skill, idx) in project.skills" :key="idx" class="skill-badge">
              {{ skill }}
            </span>
          </div>
          <div class="project-links">
            <a v-if="project.link" :href="project.link" target="_blank" class="project-link">
              View Project →
            </a>
            <a v-if="project.link1" :href="project.link1" target="_blank" class="project-link">
              View GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    icon: 'mdi-leaf',
    iconColor: '#66BB6A',
    title: 'Potato Leaf Disease Detection',
    description: 'Built a Streamlit web application to detect potato leaf diseases using a trained CNN model. Integrated image upload functionality with real-time prediction output and applied transfer learning to enhance model accuracy.',
    skills: ['Python', 'Streamlit', 'CNN', 'Deep Learning'],
    link: 'https://potato-leaf-diseases-detection.streamlit.app/',
    link1: 'https://github.com/VedantBende/potato-leaf-disease-detection'
  },
  {
    icon: 'mdi-weather-partly-cloudy',
    iconColor: '#29B6F6',
    title: 'Weather Dashboard',
    description: 'A modern, responsive weather dashboard built with Vue.js 3 and Vite. Features real-time weather data, 5-day forecasts, interactive charts, and location-based weather updates with a clean, minimalist UI.',
    skills: ['Vue.js 3', 'Vite', 'Weather API', 'Chart.js', 'Responsive Design'],
    link: 'https://weather-dashboard-21.vercel.app/',
    link1: 'https://github.com/VedantBende/weather-dashboard'
  },
  {
    icon: 'mdi-web',
    iconColor: '#42A5F5',
    title: 'Portfolio Website 1.0',
    description: 'First iteration of personal portfolio website showcasing projects and skills. Features clean design and user-friendly navigation with project highlights.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Design'],
    link: 'https://vedantbende.github.io/portfolio/',
    link1: 'https://github.com/VedantBende/portfolio'
  },
  {
    icon: 'mdi-web',
    iconColor: '#EC407A',
    title: 'Portfolio Website 2.0',
    description: 'A modern, minimalistic portfolio showcasing full-stack projects, design work, and prompt-based AI experiments. Built with responsive design principles and smooth animations.',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    link: 'https://vedantbende.github.io/Portfolio-2.0/',
    link1: 'https://github.com/VedantBende/Portfolio-2.0'
  },
  {
    icon: 'mdi-web',
    iconColor: '#FFA726',
    title: 'Portfolio Website 3.0 (Current)',
    description: 'This portfolio! A Vue.js 3 based modern portfolio with advanced animations, smooth scrolling, and cinematic frame transitions. Features GSAP animations and Locomotive Scroll.',
    skills: ['Vue.js', 'GSAP', 'Locomotive Scroll', 'Vuetify', 'Modern Design'],
    link: 'https://vedant-bende-portfolio-3.vercel.app/',
    link1: 'https://github.com/VedantBende/Portfolio-3.0'
  }
])
</script>

<style scoped>
/* Desktop-only styles (1024px+) */
.page2 {
  width: 100vw;
  z-index: 1;
  padding: 6rem 10%;
  overflow: hidden;
  background: 
    radial-gradient(at 0% 100%, rgba(255, 140, 107, 0.15), transparent 50%),
    radial-gradient(at 80% 100%, rgba(138, 180, 248, 0.15), transparent 50%),
    radial-gradient(at 40% 0%, rgba(165, 142, 251, 0.15), transparent 50%),
    radial-gradient(at 100% 0%, rgba(253, 186, 116, 0.15), transparent 50%),
    #f1f1f1;
}

.parallax-layer {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.layer-1 {
  top: 10%;
  left: 10%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.layer-2 {
  bottom: 10%;
  right: 10%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.projects-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

#title-text {
  width: 100%;
}

#title-text h3 {
  font-weight: 400;
  color: #7c7c7c;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

#title-text h1 {
  line-height: 1.5;
  font-size: 50px;
  font-weight: 700;
  color: #000;
}

#projects-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.project-item {
  margin-bottom: 3rem;
  max-width: 50%;
  width: 100%;
}

.project-item:last-child {
  margin-bottom: 0;
}

.project-item.align-right {
  text-align: end;
  margin-left: auto;
}

.project-item.align-left {
  text-align: start;
  margin-right: auto;
}

.project-icon {
  font-size: 48px !important;
  margin-bottom: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.project-item:hover .project-icon {
  opacity: 1;
  transform: scale(1.1);
}

.project-item h2 {
  font-size: 36px;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
}

.project-description {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.project-item.align-right .project-skills {
  justify-content: flex-end;
}

.project-item.align-left .project-skills {
  justify-content: flex-start;
}

.skill-badge {
  display: inline-block;
  font-size: 13px;
  color: #000;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.4rem 0.85rem;
  border-radius: 40px;
  letter-spacing: 0.03em;
  font-weight: 500;
  transition: all 0.3s;
}

.skill-badge:hover {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-item.align-right .project-links {
  justify-content: flex-end;
}

.project-item.align-left .project-links {
  justify-content: flex-start;
}

.project-link {
  display: inline-block;
  color: #1976D2;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
}

.project-link:hover {
  color: #1565C0;
  text-decoration: underline;
}
</style>
