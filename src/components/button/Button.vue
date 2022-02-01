<template>
  <button :class="['btn', btnType]" @click="$emit('btnClick')" :disabled="disabled">
    {{ value }}
  </button>
</template>

<script>
import './Button.css';
export default {
  props: {
    btnType: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
    disabled: Boolean,
  },
  emits: ['btnClick'],
};
</script>

<style></style>
