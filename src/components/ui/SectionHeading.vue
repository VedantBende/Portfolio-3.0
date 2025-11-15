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
    medium: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl'
  }
  return sizes[props.size]
})
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
.section-heading {
  font-weight: 900;
  text-shadow: 0 0 40px rgba(233, 69, 96, 0.3);
  line-height: 1.2;
  margin-bottom: 1.5rem;
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

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .section-heading {
    text-shadow: 0 0 35px rgba(233, 69, 96, 0.3);
    margin-bottom: 1.25rem;
  }
  
  .section-heading.text-5xl,
  .section-heading.md\:text-6xl {
    font-size: 2.75rem;
  }
  
  .section-heading.text-4xl,
  .section-heading.md\:text-5xl {
    font-size: 2.15rem;
  }
  
  .section-heading.text-3xl {
    font-size: 1.75rem;
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .section-heading {
    text-shadow: 0 0 30px rgba(233, 69, 96, 0.25);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .section-heading.text-5xl,
  .section-heading.md\:text-6xl {
    font-size: 2.5rem;
  }
  
  .section-heading.text-4xl,
  .section-heading.md\:text-5xl {
    font-size: 2rem;
  }
  
  .section-heading.text-3xl {
    font-size: 1.625rem;
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .section-heading {
    text-shadow: 0 0 25px rgba(233, 69, 96, 0.2);
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .section-heading.text-5xl,
  .section-heading.md\:text-6xl {
    font-size: 2rem;
  }
  
  .section-heading.text-4xl,
  .section-heading.md\:text-5xl {
    font-size: 1.75rem;
  }
  
  .section-heading.text-3xl {
    font-size: 1.5rem;
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .section-heading {
    text-shadow: 0 0 20px rgba(233, 69, 96, 0.2);
    margin-bottom: 0.875rem;
    line-height: 1.35;
  }
  
  .section-heading.text-5xl,
  .section-heading.md\:text-6xl {
    font-size: 1.75rem;
  }
  
  .section-heading.text-4xl,
  .section-heading.md\:text-5xl {
    font-size: 1.5rem;
  }
  
  .section-heading.text-3xl {
    font-size: 1.375rem;
  }
}
</style>