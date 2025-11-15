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
/* Base styles - Desktop only */
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
</style>
