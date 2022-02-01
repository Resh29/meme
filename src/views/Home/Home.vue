<template>
  <div class="home">
    <meme-container v-on:nextMeme="loadNextMeme" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MemeContainer from '../../components/meme-container/meme-container.vue';
export default {
  components: {
    MemeContainer,
  },
  name: 'HomePage',
  data() {
    return {};
  },

  computed: mapState({
    meme: (state) => state.memes.currentMeme,
  }),
  mounted() {
    if (this.meme) {
      this.$store.dispatch('loadingStateChange');
    } else {
      try {
        this.$store.dispatch('getMeme');
        // this.$store.dispatch('loadingStateChange');
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  methods: {
    async loadNextMeme() {
      this.$store.dispatch('getMeme');
    },
  },
};
</script>

<style></style>
