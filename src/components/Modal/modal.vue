<template>
  <teleport to="body">
    <div class="modal" v-if="isOpen">
      <div class="modal__content">
        <div class="modal__body">
          <p class="modal__text">{{ message }}</p>
        </div>
        <div class="modal__footer">
          <button class="btn primary" @click="clickHandle(true)">ok</button>
          <button class="btn error btn-lighten" @click="clickHandle(false)">
            not ok
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import './modal.css';
export default {
  name: 'modal',
  props: {
    message: String,
    isOpen: Boolean,
    targetObject: Object,
  },
  emits: ['clickEvent'],
  methods: {
    clickHandle(answer) {
      if (answer) {
        this.$emit('clickEvent', true, this.targetObject);
      } else {
        this.$emit('clickEvent', false, this.targetObject);
      }
    },
  },
};
</script>

<style></style>
