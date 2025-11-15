<template>
  <div v-show="canvasStore.isCanvasVisible" class="canvas-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCanvasStore } from '@/store/canvas'

gsap.registerPlugin(ScrollTrigger)

const canvasStore = useCanvasStore()
const canvasRef = ref(null)
const frameCount = 121
const images = []
const imageSeq = { frame: 0 }

function files(index) {
  return `/frames/${index}.png`
}

function scaleImage(img, ctx) {
  if (!img || !img.complete) return
  
  const canvas = ctx.canvas
  const hRatio = canvas.width / img.width
  const vRatio = canvas.height / img.height
  const ratio = Math.min(hRatio, vRatio)
  const centerShift_x = (canvas.width - img.width * ratio) / 2
  const centerShift_y = (canvas.height - img.height * ratio) / 2
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(
    img,
    0, 0,
    img.width, img.height,
    centerShift_x, centerShift_y,
    img.width * ratio, img.height * ratio
  )
}

// OPTIMIZATION: Use requestAnimationFrame for smoother rendering
let rafId = null
let targetFrame = 0

function render() {
  const canvas = canvasRef.value
  if (!canvas) return
  const context = canvas.getContext('2d')
  const currentFrame = Math.floor(targetFrame)
  if (images[currentFrame] && images[currentFrame].complete) {
    scaleImage(images[currentFrame], context)
  }
}

function scheduleRender() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    render()
    rafId = null
  })
}

let animationInstance = null
let resizeTimeout = null

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  
  const context = canvas.getContext('2d')
  
  // Set canvas dimensions
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  // Load all frames
  let loadedImages = 0
  for (let i = 0; i < frameCount; i++) {
    const img = new Image()
    img.src = files(i)
    img.onload = () => {
      loadedImages++
      if (loadedImages === 1) {
        render()
      }
      if (loadedImages === frameCount) {
        console.log('All frames loaded!')
      }
    }
    img.onerror = () => {
      console.error(`Failed to load frame ${i}`)
    }
    images.push(img)
  }
  
  // Wait for Locomotive Scroll to initialize
  setTimeout(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true
    })
    
    // OPTIMIZED: Use lighter scrub value and requestAnimationFrame
    animationInstance = gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: '#main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,  // CHANGED: Back to lighter value for performance
        scroller: '#main',
        invalidateOnRefresh: true,
        // OPTIMIZATION: Throttle updates
        onUpdate: (self) => {
          targetFrame = imageSeq.frame
          scheduleRender()
        }
      }
    })
    
    console.log('ScrollTrigger initialized')
  }, 1000)
  
  // Handle window resize with debounce
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      render()
      if (animationInstance) {
        ScrollTrigger.refresh()
      }
    }, 150)
  })
})

onUnmounted(() => {
  if (animationInstance) {
    animationInstance.scrollTrigger?.kill()
    animationInstance.kill()
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
  clearTimeout(resizeTimeout)
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  transform: translateZ(0);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .canvas-container {
    z-index: 99999;
    margin-top: 100%;
  }
  
  canvas {
    image-rendering: auto;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .canvas-container {
    z-index: 99999;
    margin-top: 15%;
  }
  
  canvas {
    image-rendering: auto;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .canvas-container {
    z-index: 99999;
    margin-top: 15%;
  }
  
  canvas {
    image-rendering: auto;
    object-fit: contain;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .canvas-container {
    z-index: 99999;
    margin-top: 65%;
  }
  
  canvas {
    image-rendering: auto;
    object-fit: contain;
  }
}
</style>