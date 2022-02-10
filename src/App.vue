<template>
  <div>
    <navbar />
    <router-view />

    <Message />
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar.vue';
import Message from './components/Messages/Message.vue';
export default {
  name: 'App',
  components: { Navbar, Message },
  data() {
    return {
      token: '',
    };
  },

  async mounted() {
    this.token = this.getUserToken();
    if (this.token)
      await this.$store.dispatch(
        'userStore/getUser',
        {
          payload: null,
          token: this.token,
        },
        { root: true }
      );
  },
  methods: {
    getUserToken() {
      return localStorage.getItem('memes-user-token') || '';
    },
  },
};
</script>

<style></style>
