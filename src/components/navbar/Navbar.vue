<template>
  <header class="header">
    <nav class="navbar">
      <button
        class="navbar__toggler"
        :class="{ 'is-open': isOpen }"
        @click="isOpen = !isOpen"
      >
        <span></span>
      </button>
      <ul class="navbar__nav" :class="{ active: isOpen }">
        <li class="navbar__item">
          <router-link class="navbar__link" to="/" @click="isOpen = !isOpen"
            >Home</router-link
          >
        </li>
        <li class="navbar__item">
          <router-link class="navbar__link" to="/my-list" @click="isOpen = !isOpen"
            >My Memes</router-link
          >
        </li>

        <li v-if="user" class="navbar__item">
          <router-link class="navbar__link" to="" @click="logOut">Logout</router-link>
        </li>
        <li v-else class="navbar__item">
          <router-link class="navbar__link" to="/auth" @click="isOpen = !isOpen"
            >Auth</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import './Navbar.css';
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false,
    };
  },
  computed: mapState({
    user: (state) => state.userStore.user,
  }),
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
      this.isOpen = false;
    },
  },
};
</script>

<style></style>
