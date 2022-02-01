<template>
  <div class="memes-list">
    <div class="memes-list__container" v-if="memes.length">
      <div class="memes-list__item" v-for="meme in memes" :key="meme.id">
        <button class="btn error btn-lighten remove-meme" @click="modalOpenHandler(meme)">
          &#10799;
        </button>
        <img
          v-lazy:[options]="meme.url"
          src=""
          :alt="meme.id"
          @click="setCurrentMemeAndOpenFSModal(meme)"
        />
      </div>
      <modal
        :isOpen="isOpen"
        :message="modalText"
        v-on:clickEvent="modalEvent"
        :targetObject="targetObject"
      />
    </div>
    <h4 v-else>There is no memes :(</h4>
    <button @click="scrollToTop" class="up-button secondary btn">&#708;</button>
  </div>
  <FSModal :isOpen="fsModalOpenState" :meme="meme" v-on:closeModal="fsModalClose" />
</template>

<script>
import './MemesList.css';
import FSModal from '../../components/FullscreenModal/FSModal.vue';
import modal from '../../components/Modal/modal.vue';
import { mapState } from 'vuex';
export default {
  name: 'MemesList',
  components: { modal, FSModal },
  data() {
    return {
      memes: [],
      modalText: 'Are you sure you want to remove this meme from your collection? :(',
      options: {
        root: null,
        rootMargin: '30px',
        threshold: 0.3,
      },
      isOpen: false,
      targetObject: null,
      fsModalOpenState: false,
      meme: null,
    };
  },
  computed: mapState({
    user: (state) => state.userStore.user,
  }),
  mounted() {
    this.memes =
      this.user?.memes || JSON.parse(localStorage.getItem('saved-memes')) || [];
  },
  methods: {
    // fullscreen modal action
    setCurrentMemeAndOpenFSModal(meme) {
      this.meme = meme;
      this.fsModalOpenState = true;
    },
    fsModalClose() {
      this.fsModalOpenState = false;
      this.meme = null;
    },
    // end
    //start modal section

    modalOpenHandler(target) {
      this.targetObject = target;
      this.isOpen = true;
    },
    // emit from modal window
    modalEvent(statement = false, target = null) {
      if (statement) {
        this.deleteMeme(target);
        this.isOpen = false;
      } else {
        this.isOpen = false;
      }
    },
    // delete meme, if answer is 'true' ¯\_(ツ)_/¯
    deleteMeme(meme) {
      try {
        this.memes = this.memes.filter((item) => item.id !== meme.id);
        localStorage.setItem('saved-memes', JSON.stringify(this.memes));
        this.$store.dispatch('pushMessage', {
          type: 'SUCCESS',
          action: 'REMOVE',
          id: Date.now(),
        });
      } catch (err) {
        this.$store.dispatch('pushMessage', {
          type: 'ERROR',
          action: 'REMOVE',
          id: Date.now(),
        });
        throw new Error(err);
      }
    },
    // end of modal section
    scrollToTop() {
      scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    },
  },
};
</script>

<style scoped></style>
