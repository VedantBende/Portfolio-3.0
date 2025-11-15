import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCanvasStore = defineStore('canvas', () => {
  const isCanvasVisible = ref(true)

  function toggleCanvas() {
    isCanvasVisible.value = !isCanvasVisible.value
  }

  return {
    isCanvasVisible,
    toggleCanvas
  }
})
