<template>
  <v-btn
    :size="size"
    :color="color"
    :variant="variant"
    class="button-primary"
    v-bind="$attrs"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'large' },
  color: { type: String, default: 'highlight' },
  variant: { type: String, default: 'elevated' }
})
</script>

<style scoped>
/* Base styles - Desktop (1281px+) */
.button-primary {
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s;
  padding: 12px 32px;
  font-size: 16px;
}

.button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(233, 69, 96, 0.4);
}

/* Small Laptops (1025px - 1280px) */
@media (min-width: 1025px) and (max-width: 1280px) {
  .button-primary {
    padding: 11px 28px;
    font-size: 15px;
    letter-spacing: 0.9px;
  }

  .button-primary:hover {
    transform: translateY(-2.5px);
    box-shadow: 0 10px 30px rgba(233, 69, 96, 0.4);
  }
}

/* Tablets (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .button-primary {
    padding: 10px 24px;
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  .button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(233, 69, 96, 0.35);
  }
}

/* Large Phones (480px - 767px) */
@media (min-width: 480px) and (max-width: 767px) {
  .button-primary {
    padding: 10px 20px;
    font-size: 14px;
    letter-spacing: 0.7px;
  }

  .button-primary:active {
    transform: scale(0.98);
    box-shadow: 0 6px 20px rgba(233, 69, 96, 0.3);
  }
}

/* Small Phones (320px - 479px) */
@media (min-width: 320px) and (max-width: 479px) {
  .button-primary {
    padding: 9px 18px;
    font-size: 13px;
    letter-spacing: 0.6px;
  }

  .button-primary:active {
    transform: scale(0.98);
    box-shadow: 0 5px 18px rgba(233, 69, 96, 0.3);
  }
}
</style>
