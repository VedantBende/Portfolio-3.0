<template>
  <footer class="footer" data-scroll-section>
    <v-container class="py-12">
      <div class="footer-content">
        <div class="footer-left">
          <h3>VEDANT BENDE</h3>
          <p>AI & Web Developer</p>
          <p class="copyright">© {{ currentYear }} All rights reserved.</p>
        </div>
        
        <!-- <div class="footer-center">
          <h4>QUICK LINKS</h4>
          <div class="footer-links">
            <a @click="scrollToSection('hero')">Home</a>
            <a @click="scrollToSection('vision')">About</a>
            <a @click="scrollToSection('projects')">Projects</a>
            <a @click="scrollToSection('experience')">Experience</a>
            <a @click="scrollToSection('skills')">Gallery</a>
            <a @click="scrollToSection('contact')">Contact</a>
          </div>
        </div> -->
        
        <div class="footer-right">
          <h4>CONNECT</h4>
          <div class="footer-social">
            <a href="https://github.com/VedantBende" target="_blank">GitHub →</a>
            <a href="https://www.linkedin.com/in/vedant-bende-3aa28b2a8/" target="_blank">LinkedIn →</a>
            <a href="mailto:vedantbende2121@gmail.com">Email →</a>
          </div>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToSection = (sectionId) => {
  if (window.locoScroll) {
    const element = document.getElementById(sectionId)
    if (element) {
      window.locoScroll.scrollTo(element, {
        offset: -70,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0]
      })
    }
  }
}
</script>

<style scoped>
.footer {
  background: 
    radial-gradient(at 0% 0%, rgba(255, 140, 107, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(138, 180, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 40% 100%, rgba(165, 142, 251, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(253, 186, 116, 0.15) 0px, transparent 50%),
    #f1f1f1;
}

/* Base styles - Desktop (1281px+) */
.footer {
  background: #000;
  color: #fff;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
}

.footer-left h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.footer-left p {
  font-size: 15px;
  color: #999;
  margin-bottom: 0.5rem;
}

.copyright {
  margin-top: 1.5rem;
  font-size: 13px;
}

.footer-right h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: 0.1em;
}

.footer-links,
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.footer-links a,
.footer-social a {
  color: #999;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s;
  cursor: pointer;
}

.footer-links a:hover,
.footer-social a:hover {
  color: #fff;
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 2.5rem;
  }
  
  .footer-left h3 {
    font-size: 20px;
  }
  
  .footer-left p {
    font-size: 14px;
  }
  
  .copyright {
    font-size: 12px;
  }
  
  .footer-right h4 {
    font-size: 14px;
  }
  
  .footer-links a,
  .footer-social a {
    font-size: 14px;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .footer {
    margin-top: 3rem;
  }
  
  .footer-content {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-left h3 {
    font-size: 18px;
  }
  
  .footer-left p {
    font-size: 13px;
  }
  
  .copyright {
    margin-top: 1rem;
    font-size: 11px;
  }
  
  .footer-right h4 {
    font-size: 13px;
    margin-bottom: 1rem;
  }
  
  .footer-links,
  .footer-social {
    gap: 0.75rem;
  }
  
  .footer-links a,
  .footer-social a {
    font-size: 13px;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .footer {
    margin-top: 2.5rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
  
  .footer-left h3 {
    font-size: 20px;
  }
  
  .footer-left p {
    font-size: 14px;
  }
  
  .copyright {
    margin-top: 1rem;
    font-size: 12px;
  }
  
  .footer-right h4 {
    font-size: 14px;
    margin-bottom: 1rem;
  }
  
  .footer-links,
  .footer-social {
    gap: 0.75rem;
    align-items: center;
  }
  
  .footer-links a,
  .footer-social a {
    font-size: 14px;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .footer {
    margin-top: 2rem;
  }
  
  .footer :deep(.v-container) {
    padding: 1.5rem 1rem !important;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-left h3 {
    font-size: 18px;
  }
  
  .footer-left p {
    font-size: 13px;
  }
  
  .copyright {
    margin-top: 0.75rem;
    font-size: 11px;
  }
  
  .footer-right h4 {
    font-size: 13px;
    margin-bottom: 0.85rem;
  }
  
  .footer-links,
  .footer-social {
    gap: 0.65rem;
    align-items: center;
  }
  
  .footer-links a,
  .footer-social a {
    font-size: 13px;
  }
}
</style>