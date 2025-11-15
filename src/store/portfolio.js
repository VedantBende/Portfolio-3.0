import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const darkMode = useStorage('portfolio-dark-mode', true)
  const scrollProgress = ref(0)
  const activeSection = ref('hero')
  const isLoading = ref(true)
  const menuOpen = ref(false)

  // Getters
  const theme = computed(() => darkMode.value ? 'dark' : 'light')
  const progressPercentage = computed(() => Math.round(scrollProgress.value * 100))

  // Actions
  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    
    // CHANGED: Apply to both html and body
    if (darkMode.value) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }

  const setScrollProgress = (progress) => {
    scrollProgress.value = progress
  }

  const setActiveSection = (section) => {
    activeSection.value = section
  }

  const setLoading = (loading) => {
    isLoading.value = loading
  }

  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
  }

  return {
    // State
    darkMode,
    scrollProgress,
    activeSection,
    isLoading,
    menuOpen,
    // Getters
    theme,
    progressPercentage,
    // Actions
    toggleDarkMode,
    setScrollProgress,
    setActiveSection,
    setLoading,
    toggleMenu
  }
})
