<template>
  <div v-if="!isDesktop" class="device-blocker">
    <div class="blocker-content">
      <div class="icon-container">
        <v-icon size="120" color="#000">mdi-monitor</v-icon>
      </div>
      
      <h1>Desktop Experience Only</h1>
      
      <p class="main-message">
        This portfolio website was exclusively designed for <br>
        <strong>Desktops and PCs</strong> to deliver the best visual experience.
      </p>
      
      <p class="sub-message">
        Please visit this website via a suitable desktop device<br>
        to explore the full interactive experience.
      </p>
      
      <!-- Portfolio 2.0 Link - Black Theme -->
      <div class="alt-portfolio">
        <p>Or view my mobile-friendly portfolio:</p>
        <a href="https://vedantbende.github.io/Portfolio-2.0/" target="_blank" class="portfolio-link">
          <v-icon size="20">mdi-open-in-new</v-icon>
          Portfolio 2.0
        </a>
      </div>
      
      <div class="device-info">
        <v-icon size="24">mdi-information-outline</v-icon>
        <span>Minimum screen width required: 1024px</span>
      </div>
      
      <div class="contact-info">
        <h3>Get in touch:</h3>
        <a href="mailto:vedantbende2121@gmail.com">vedantbende2121@gmail.com</a>
        <div class="social-links">
          <a href="https://github.com/VedantBende" target="_blank">
            <v-icon>mdi-github</v-icon>
          </a>
          <a href="https://www.linkedin.com/in/vedant-bende-3aa28b2a8/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDesktop = ref(false)

const checkDevice = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
})
</script>

<style scoped>
.device-blocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow: auto;
}

.blocker-content {
  max-width: 600px;
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.icon-container {
  margin-bottom: 2rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.blocker-content h1 {
  font-size: 32px;
  font-weight: 800;
  color: #000;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.main-message {
  font-size: 18px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.main-message strong {
  color: #000;
  font-weight: 700;
}

.sub-message {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Portfolio 2.0 Link - Black Theme */
.alt-portfolio {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #000;
  border-radius: 12px;
  border: 2px solid #000;
}

.alt-portfolio p {
  font-size: 14px;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 500;
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  border: 2px solid #fff;
}

.portfolio-link:hover {
  background: #000;
  color: #fff;
  transform: translateY(-2px);
}

.portfolio-link:hover :deep(.v-icon) {
  color: #fff !important;
}

.portfolio-link :deep(.v-icon) {
  color: #000 !important;
  transition: color 0.3s ease;
}

.device-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-bottom: 2rem;
  font-size: 14px;
  color: #555;
  flex-wrap: wrap;
}

.contact-info {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #eee;
}

.contact-info h3 {
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.75rem;
}

.contact-info a {
  color: #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.3s;
  word-break: break-word;
}

.contact-info a:hover {
  opacity: 0.7;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.social-links a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 50%;
  transition: all 0.3s;
}

.social-links a:hover {
  transform: scale(1.1);
  background: #333;
}

.social-links a :deep(.v-icon) {
  color: #fff !important;
}

/* Tablets (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .device-blocker {
    padding: 1.5rem;
  }
  
  .blocker-content {
    padding: 2.5rem 2rem;
    max-width: 550px;
  }
  
  .blocker-content h1 {
    font-size: 28px;
  }
  
  .icon-container :deep(.v-icon) {
    font-size: 100px !important;
  }
  
  .main-message {
    font-size: 17px;
  }
  
  .sub-message {
    font-size: 14px;
  }
  
  .portfolio-link {
    font-size: 15px;
  }
  
  .device-info {
    font-size: 13px;
  }
  
  .contact-info a {
    font-size: 15px;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .device-blocker {
    padding: 1rem;
  }
  
  .blocker-content {
    padding: 2rem 1.5rem;
    max-width: 480px;
  }
  
  .blocker-content h1 {
    font-size: 24px;
  }
  
  .icon-container {
    margin-bottom: 1.5rem;
  }
  
  .icon-container :deep(.v-icon) {
    font-size: 90px !important;
  }
  
  .main-message {
    font-size: 16px;
  }
  
  .main-message br,
  .sub-message br {
    display: none;
  }
  
  .sub-message {
    font-size: 13px;
  }
  
  .alt-portfolio {
    padding: 1.25rem;
  }
  
  .alt-portfolio p {
    font-size: 13px;
  }
  
  .portfolio-link {
    font-size: 14px;
    padding: 0.65rem 1.25rem;
  }
  
  .device-info {
    font-size: 12px;
    padding: 0.85rem;
  }
  
  .device-info :deep(.v-icon) {
    font-size: 20px !important;
  }
  
  .contact-info h3 {
    font-size: 15px;
  }
  
  .contact-info a {
    font-size: 14px;
  }
  
  .social-links a {
    width: 45px;
    height: 45px;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .device-blocker {
    padding: 1rem;
  }
  
  .blocker-content {
    padding: 1.5rem 1.25rem;
  }
  
  .blocker-content h1 {
    font-size: 20px;
    margin-bottom: 1.25rem;
  }
  
  .icon-container {
    margin-bottom: 1.25rem;
  }
  
  .icon-container :deep(.v-icon) {
    font-size: 70px !important;
  }
  
  .main-message {
    font-size: 14px;
    margin-bottom: 1.25rem;
  }
  
  .main-message br,
  .sub-message br {
    display: none;
  }
  
  .sub-message {
    font-size: 12px;
    margin-bottom: 1.5rem;
  }
  
  .alt-portfolio {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .alt-portfolio p {
    font-size: 12px;
    margin-bottom: 0.85rem;
  }
  
  .portfolio-link {
    font-size: 13px;
    padding: 0.6rem 1rem;
  }
  
  .portfolio-link :deep(.v-icon) {
    font-size: 18px !important;
  }
  
  .device-info {
    font-size: 11px;
    padding: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .device-info :deep(.v-icon) {
    font-size: 18px !important;
  }
  
  .contact-info {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }
  
  .contact-info h3 {
    font-size: 14px;
  }
  
  .contact-info a {
    font-size: 13px;
  }
  
  .social-links {
    gap: 1.25rem;
    margin-top: 1.25rem;
  }
  
  .social-links a {
    width: 42px;
    height: 42px;
  }
  
  .social-links a :deep(.v-icon) {
    font-size: 20px !important;
  }
}

/* Extra Small Phones (< 320px) */
@media (max-width: 319px) {
  .blocker-content {
    padding: 1.25rem 1rem;
  }
  
  .blocker-content h1 {
    font-size: 18px;
  }
  
  .icon-container :deep(.v-icon) {
    font-size: 60px !important;
  }
  
  .main-message {
    font-size: 13px;
  }
  
  .sub-message {
    font-size: 11px;
  }
  
  .portfolio-link {
    font-size: 12px;
    padding: 0.5rem 0.85rem;
  }
  
  .device-info {
    font-size: 10px;
  }
  
  .contact-info a {
    font-size: 12px;
  }
  
  .social-links a {
    width: 38px;
    height: 38px;
  }
}
</style>
