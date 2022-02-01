<template>
  <div>
    <div class="meme-container">
      <!-- -->
      <loader v-if="loading" />
      <div v-else class="meme-container__image">
        <div class="meme-container__title">
          <h2>{{ meme.title }}</h2>
        </div>

        <img
          @click="modalOpen = true"
          class="meme-img"
          :src="meme.url"
          :alt="meme.title"
        />
        <a :href="meme.postLink">Original post hehe</a>
        <FSModal :isOpen="modalOpen" v-on:closeModal="modalOpen = false" :meme="meme" />
      </div>
      <div class="action-button">
        <Button
          :disabled="loading"
          value="Another one!"
          v-on:btnClick="loadNext"
          btnType="primary"
        ></Button>
        <Button btnType="success" value="Save!" v-on:btnClick="saveMeme" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import './meme-container.css';
import Button from '../button/Button.vue';
import Loader from '../loader/Loader.vue';
import FSModal from '../FullscreenModal/FSModal.vue';
export default {
  name: 'MemeContainer',
  components: {
    Button,
    Loader,
    FSModal,
  },
  data() {
    return {
      modalOpen: false,
    };
  },

  emits: ['nextMeme'],

  computed: mapState({
    loading: (state) => {
      return state.memes.loading;
    },
    meme: (state) => state.memes.currentMeme,
  }),
  methods: {
    loadNext() {
      this.$emit('nextMeme');
    },
    saveMeme() {
      const memes = JSON.parse(localStorage.getItem('saved-memes')) || [];
      const id = Date.now();
      if (memes.find((meme) => this.meme.url === meme.url)) {
        this.$store.dispatch('pushMessage', {
          type: 'ERROR',
          action: 'ADD',
          id: Date.now(),
        });
      } else {
        memes.push({ url: this.meme.url, postLink: this.meme.postLink, id });
        localStorage.setItem('saved-memes', JSON.stringify(memes));
        this.$store.dispatch('pushMessage', {
          type: 'SUCCESS',
          action: 'ADD',
          id: Date.now(),
        });
      }
    },
  },
};
</script>

<style></style>
