import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize GSAP defaults
export const initGSAP = () => {
  gsap.config({
    force3D: true,
    nullTargetWarn: false
  })
}

// Fade in animation
export const fadeIn = (element, duration = 1, delay = 0) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out'
    }
  )
}

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger,
      duration: 0.8,
      ease: 'power2.out'
    }
  )
}

// Parallax effect
export const createParallax = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

// Text reveal animation
export const revealText = (element, duration = 1.2) => {
  return gsap.fromTo(
    element,
    { 
      opacity: 0, 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' 
    },
    {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      duration,
      ease: 'power4.inOut'
    }
  )
}

// Canvas frame animation helper
export const createFrameAnimation = (frameData, canvas, context) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: canvas.parentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      pin: true,
      anticipatePin: 1
    }
  })

  timeline.to(frameData, {
    frame: frameData.maxFrame,
    snap: 'frame',
    ease: 'none',
    onUpdate: () => {
      const frameIndex = Math.round(frameData.frame)
      if (frameData.images[frameIndex]) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(frameData.images[frameIndex], 0, 0, canvas.width, canvas.height)
      }
    }
  })

  return timeline
}

export { gsap, ScrollTrigger }
