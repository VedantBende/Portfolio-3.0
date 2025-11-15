<template>
  <nav id="nav">
    <h3 @click="scrollToSection('page')">VEDANT BENDE</h3>
    
    <div class="nav-links hidden md:flex">
      <span 
        v-for="item in navItems" 
        :key="item.id"
        @click="scrollToSection(item.id)"
      >
        {{ item.label }}
      </span>
    </div>
    
    <div class="nav-actions">
      <button 
        class="canvas-toggle" 
        @click="canvasStore.toggleCanvas()"
        :class="{ active: canvasStore.isCanvasVisible }"
      >
        <v-icon size="20">{{ canvasStore.isCanvasVisible ? 'mdi-eye' : 'mdi-eye-off' }}</v-icon>
      </button>
      
      <v-btn
        icon
        variant="text"
        class="menu-btn md:hidden"
        @click="store.toggleMenu()"
      >
        <v-icon>{{ store.menuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
      </v-btn>
    </div>

    <v-navigation-drawer
      v-model="store.menuOpen"
      location="right"
      temporary
      class="mobile-menu"
    >
      <div class="mobile-header">
        <h3>MENU</h3>
        <v-btn icon variant="text" size="small" @click="store.toggleMenu()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      
      <v-list class="mobile-list">
        <v-list-item
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id)"
          class="menu-item"
        >
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
        
        <v-divider class="my-2"></v-divider>
        
        <v-list-item @click="canvasStore.toggleCanvas()" class="menu-item">
          <v-list-item-title>
            {{ canvasStore.isCanvasVisible ? 'HIDE ANIMATION' : 'SHOW ANIMATION' }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { usePortfolioStore } from '@/store/portfolio'
import { useCanvasStore } from '@/store/canvas'

const store = usePortfolioStore()
const canvasStore = useCanvasStore()

const navItems = [
  { id: 'page', label: 'HOME' },
  { id: 'page1', label: 'ABOUT' },
  { id: 'page2', label: 'PROJECTS' },
  { id: 'page3', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' }
]

const scrollToSection = (sectionId) => {
  store.menuOpen = false
  
  if (window.locoScroll) {
    const element = document.getElementById(sectionId)
    if (element) {
      window.locoScroll.scrollTo(element, {
        offset: -70,
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0]
      })
      store.setActiveSection(sectionId)
    }
  }
}
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10000;
  padding: 0 40px;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
}

#nav > h3 {
  font-family: gilroy, sans-serif;
  font-weight: 400;
  font-size: 22px;
  cursor: pointer;
  transition: opacity 0.3s;
  color: #fff;
}

#nav > h3:hover {
  opacity: 0.6;
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-links span {
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
}

.nav-links span:hover {
  opacity: 0.6;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.canvas-toggle {
  padding: 10px 14px;
  border-radius: 50px;
  background-color: #fff;
  color: #000;
  border: 2px solid #fff;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.canvas-toggle:hover {
  background-color: transparent;
  color: #fff;
}

.canvas-toggle.active {
  background-color: transparent;
  color: #fff;
}

.menu-btn {
  color: #fff;
}

.mobile-menu {
  background: #ffffff !important;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 9999 !important;
  width: 280px !important;
  height: 100vh !important;
  overflow-y: auto !important;
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.25rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  background: #f8f8f8;
}

.mobile-header h3 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
}

.mobile-list {
  padding: 0.5rem 0 !important;
  background: #fff !important;
}

.menu-item {
  padding: 1rem 1.5rem !important;
  cursor: pointer;
  transition: background 0.2s;
}

.menu-item:hover {
  background: rgba(0, 0, 0, 0.05) !important;
}

.mobile-list :deep(.v-list-item-title) {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #000;
}

.hidden {
  display: none;
}

@media (min-width: 768px) {
  .md\:flex {
    display: flex;
  }
  
  .md\:inline-block {
    display: inline-block;
  }
  
  .md\:hidden {
    display: none;
  }
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  #nav {
    height: 65px;
    padding: 0 35px;
  }
  
  #nav > h3 {
    font-size: 20px;
  }
  
  .nav-links {
    gap: 2rem;
  }
  
  .nav-links span {
    font-size: 13px;
  }
  
  .canvas-toggle {
    padding: 9px 13px;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  #nav {
    height: 60px;
    padding: 0 25px;
  }
  
  #nav > h3 {
    font-size: 18px;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .nav-links span {
    font-size: 12px;
  }
  
  .canvas-toggle {
    padding: 8px 12px;
  }
  
  .canvas-toggle :deep(.v-icon) {
    font-size: 18px !important;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  #nav {
    height: 60px;
    padding: 0 20px;
  }
  
  #nav > h3 {
    font-size: 16px;
  }
  
  .canvas-toggle {
    padding: 8px 10px;
  }
  
  .canvas-toggle :deep(.v-icon) {
    font-size: 18px !important;
  }
  
  .mobile-menu {
    width: 260px !important;
  }
  
  .mobile-header {
    padding: 1.25rem 1rem;
  }
  
  .mobile-header h3 {
    font-size: 16px;
  }
  
  .mobile-list :deep(.v-list-item-title) {
    font-size: 13px;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  #nav {
    height: 55px;
    padding: 0 15px;
  }
  
  #nav > h3 {
    font-size: 14px;
  }
  
  .nav-actions {
    gap: 0.5rem;
  }
  
  .canvas-toggle {
    padding: 7px 9px;
  }
  
  .canvas-toggle :deep(.v-icon) {
    font-size: 16px !important;
  }
  
  .menu-btn :deep(.v-icon) {
    font-size: 22px !important;
  }
  
  .mobile-menu {
    width: 240px !important;
  }
  
  .mobile-header {
    padding: 1rem 0.85rem;
  }
  
  .mobile-header h3 {
    font-size: 14px;
  }
  
  .menu-item {
    padding: 0.85rem 1.25rem !important;
  }
  
  .mobile-list :deep(.v-list-item-title) {
    font-size: 12px;
  }
}
</style>