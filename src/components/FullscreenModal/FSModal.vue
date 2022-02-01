<template>
  <teleport to="body">
    <div v-if="isOpen" class="fullscreen-modal" @click="closeModal">
      <img
        class="fullscreen-modal__content"
        :src="meme.url"
        :alt="meme.title"
        @click.stop=""
      />
    </div>
  </teleport>
</template>

<script>
// import { mapState } from 'vuex';
import './FSModal.css';
export default {
  name: 'fullscreen-modal',
  props: {
    isOpen: Boolean,
    meme: Object,
  },
  data() {
    return {};
  },
  emits: ['closeModal'],
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
  // computed: mapState({
  //   meme: (state) => state.memes.currentMeme,
  // }),
};
</script>

<style></style>
