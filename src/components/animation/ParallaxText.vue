<template>
  <div class="loop-container">
    <div ref="loopRef" class="loop-text">
      <h1 v-for="n in 3" :key="n">
        <slot></slot>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const loopRef = ref(null)
let animation = null

onMounted(() => {
  animation = gsap.to(loopRef.value, {
    x: '-100%',
    duration: 25,
    repeat: -1,
    ease: 'none'
  })
})

onUnmounted(() => {
  if (animation) animation.kill()
})
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
.loop-container {
  position: absolute;
  top: 20%;
  height: 20%;
  width: 100%;
  overflow: hidden;
  z-index: 5;
  pointer-events: none;
}

.loop-text {
  display: flex;
  white-space: nowrap;
  font-size: clamp(60px, 6vw, 100px);
  font-weight: 700;
  color: #000;
  will-change: transform;
}

.loop-text h1 {
  margin: 0;
  padding-right: 4rem;
  color: #000;
}

.loop-text h1 :deep(span) {
  -webkit-text-stroke: 1.5px #000;
  color: transparent;
  font-weight: 700;
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .loop-container {
    top: 22%;
    height: 18%;
  }
  
  .loop-text {
    font-size: clamp(50px, 5.5vw, 85px);
  }
  
  .loop-text h1 {
    padding-right: 3.5rem;
  }
  
  .loop-text h1 :deep(span) {
    -webkit-text-stroke: 1.4px #000;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .loop-container {
    top: 24%;
    height: 16%;
  }
  
  .loop-text {
    font-size: clamp(40px, 6vw, 70px);
  }
  
  .loop-text h1 {
    padding-right: 3rem;
  }
  
  .loop-text h1 :deep(span) {
    -webkit-text-stroke: 1.3px #000;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .loop-container {
    top: 28%;
    height: 14%;
  }
  
  .loop-text {
    font-size: clamp(28px, 7vw, 45px);
  }
  
  .loop-text h1 {
    padding-right: 2rem;
  }
  
  .loop-text h1 :deep(span) {
    -webkit-text-stroke: 1.2px #000;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .loop-container {
    top: 30%;
    height: 12%;
  }
  
  .loop-text {
    font-size: clamp(20px, 8vw, 35px);
  }
  
  .loop-text h1 {
    padding-right: 1.5rem;
  }
  
  .loop-text h1 :deep(span) {
    -webkit-text-stroke: 1px #000;
  }
}
</style>