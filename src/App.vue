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
    return {};
  },
  mounted() {
    this.$store.dispatch('getUser', this.getUserToken());
  },
  methods: {
    getUserToken() {
      return localStorage.getItem('memes-user-token') || '';
    },
  },
};
</script>

<style></style>
