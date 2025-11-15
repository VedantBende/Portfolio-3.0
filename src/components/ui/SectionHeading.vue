<template>
  <h2 class="section-heading font-display" :class="sizeClass">
    <slot></slot>
  </h2>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'large',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const sizeClass = computed(() => {
  const sizes = {
    small: 'text-3xl',
    medium: 'text-4xl',
    large: 'text-5xl'
  }
  return sizes[props.size]
})
</script>

<style scoped>
.section-heading {
  font-weight: 900;
  text-shadow: 0 0 40px rgba(233, 69, 96, 0.3);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-size: 3rem; /* base desktop size for large */
}

.section-heading.text-5xl {
  font-size: 3rem;
}

.section-heading.text-4xl {
  font-size: 2.25rem;
}

.section-heading.text-3xl {
  font-size: 1.875rem;
}
</style>
