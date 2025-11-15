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
</style>
