<template>
  <v-app>
    <!-- Device Blocker for Mobile/Tablet -->
    <DeviceBlocker />
    
    <!-- Desktop Content (hidden on mobile) -->
    <template v-if="isDesktop">
      <Navbar />
      <FixedCanvas />
      
      <v-main id="main" class="main-content" data-scroll-container>
        <slot></slot>
      </v-main>
      
      <Footer />
    </template>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/common/Navbar.vue'
import Footer from '@/components/common/Footer.vue'
import FixedCanvas from '@/components/animation/FixedCanvas.vue'
import DeviceBlocker from '@/components/common/DeviceBlocker.vue'
import { initLocomotiveScroll, destroyLocomotiveScroll } from '@/utils/locomotive'
import { initGSAP } from '@/utils/gsapHelpers'

const isDesktop = ref(false)
let locoScroll = null

const checkDevice = () => {
  isDesktop.value = window.innerWidth >= 1024
}

onMounted(() => {
  checkDevice()
  window.addEventListener('resize', checkDevice)
  
  if (isDesktop.value) {
    initGSAP()
    
    setTimeout(() => {
      const mainElement = document.querySelector('#main')
      if (mainElement) {
        locoScroll = initLocomotiveScroll(mainElement)
        
        setTimeout(() => {
          if (locoScroll) {
            locoScroll.update()
          }
        }, 1000)
      }
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice)
  if (locoScroll) {
    destroyLocomotiveScroll(locoScroll)
  }
})
</script>

<style scoped>
/* Base styles - Desktop only */
#main {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  padding-top: 70px;
}

.main-content {
  background: transparent;
  position: relative;
  z-index: 1;
}

.main-content :deep(.v-main__wrap) {
  display: flex;
  flex-direction: column;
}
</style>
