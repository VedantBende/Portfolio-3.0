import LocomotiveScroll from 'locomotive-scroll'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export const initLocomotiveScroll = (container) => {
  const locoScroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    smoothMobile: false,
    lerp: 0.08, // CRITICAL: Lower = smoother (0.05-0.1 range)
    multiplier: 0.8, // Reduce scroll speed for better control
    touchMultiplier: 2,
    smartphone: {
      smooth: false
    },
    tablet: {
      smooth: false
    },
    // CRITICAL: Reduce update frequency
    class: 'is-inview',
    reloadOnContextChange: true
  })

  // OPTIMIZED: Throttle ScrollTrigger updates
  let scrollTimeout
  locoScroll.on('scroll', () => {
    if (!scrollTimeout) {
      scrollTimeout = requestAnimationFrame(() => {
        ScrollTrigger.update()
        scrollTimeout = null
      })
    }
  })

  ScrollTrigger.scrollerProxy(container, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    },
    pinType: container.style.transform ? 'transform' : 'fixed'
  })

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
  ScrollTrigger.defaults({ scroller: container })
  
  // CRITICAL: Delay initial refresh
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)

  window.locoScroll = locoScroll

  return locoScroll
}

export const destroyLocomotiveScroll = (locoScroll) => {
  if (locoScroll) {
    locoScroll.destroy()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    window.locoScroll = null
  }
}