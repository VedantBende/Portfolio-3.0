<template>
  <div ref="containerRef" class="scroll-sequence-container" :style="containerStyle">
    <canvas ref="canvasRef" class="scroll-canvas"></canvas>
    <div class="overlay-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  frameCount: {
    type: Number,
    default: 150
  },
  frameFolder: {
    type: String,
    default: '/frames/'
  },
  framePrefix: {
    type: String,
    default: 'frame_'
  },
  frameExtension: {
    type: String,
    default: '.webp'
  },
  height: {
    type: String,
    default: '500vh'
  }
})

const containerRef = ref(null)
const canvasRef = ref(null)
const frameData = ref({ frame: 0, maxFrame: props.frameCount - 1 })
const images = ref([])

const containerStyle = computed(() => ({
  height: props.height
}))

const loadImages = () => {
  const imagePromises = []
  
  for (let i = 0; i < props.frameCount; i++) {
    const img = new Image()
    const frameNumber = String(i + 1).padStart(4, '0')
    img.src = `${props.frameFolder}${props.framePrefix}${frameNumber}${props.frameExtension}`
    
    imagePromises.push(
      new Promise((resolve, reject) => {
        img.onload = () => resolve(img)
        img.onerror = reject
      })
    )
    
    images.value[i] = img
  }
  
  return Promise.all(imagePromises)
}

const render = (index) => {
  const canvas = canvasRef.value
  const context = canvas.getContext('2d')
  const img = images.value[index]
  
  if (img && img.complete) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    )
    
    const x = (canvas.width / 2) - (img.width / 2) * scale
    const y = (canvas.height / 2) - (img.height / 2) * scale
    
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(img, x, y, img.width * scale, img.height * scale)
  }
}

let scrollTrigger = null

onMounted(async () => {
  try {
    await loadImages()
    render(0)
    
    scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: canvasRef.value,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          Math.floor(self.progress * props.frameCount),
          props.frameCount - 1
        )
        render(frameIndex)
      }
    })
    
    window.addEventListener('resize', () => render(Math.round(frameData.value.frame)))
  } catch (error) {
    console.error('Error loading frames:', error)
  }
})

onUnmounted(() => {
  if (scrollTrigger) {
    scrollTrigger.kill()
  }
  window.removeEventListener('resize', () => {})
})
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
.scroll-sequence-container {
  position: relative;
  width: 100%;
}

.scroll-canvas {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  padding: 0;
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .scroll-canvas {
    image-rendering: auto;
  }
  
  .overlay-content {
    padding: 0 2%;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .scroll-canvas {
    height: 100vh;
    object-fit: contain;
    image-rendering: auto;
  }
  
  .overlay-content {
    padding: 0 3%;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .scroll-canvas {
    height: 100vh;
    object-fit: contain;
    image-rendering: auto;
  }
  
  .overlay-content {
    padding: 0 4%;
    top: 0;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .scroll-canvas {
    height: 100vh;
    object-fit: contain;
    image-rendering: auto;
  }
  
  .overlay-content {
    padding: 0 5%;
    top: 0;
  }
}
</style>