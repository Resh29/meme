<template>
  <div class="auth-page">
    <div class="auth-page__content">
      <form
        v-if="isLogin"
        action=""
        v-on:submit.prevent="login"
        class="auth-page__form login"
      >
        <div class="auth-page__form-container">
          <input type="email" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-container">
          <input type="password" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-buttons">
          <button type="submit" class="auth-page__btn btn primary">Login</button>
          <button type="button" class="auth-page__btn btn" @click.stop="isLogin = false">
            to registration...
          </button>
        </div>
      </form>
      <form v-else action="" class="auth-page__form registration">
        <div class="auth-page__form-container">
          <input type="email" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-container">
          <input type="password" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-container">
          <input type="password" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-container">
          <input type="text" class="auth-page__form-input" />
        </div>
        <div class="auth-page__form-buttons">
          <button type="submit" class="auth-page__btn btn success">Registration</button>
          <button type="button" class="auth-page__btn btn" @click.stop="isLogin = true">
            to login...
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import './AuthPage.css';
export default {
  name: 'auth-page',
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch('getUser');
      this.$store.dispatch('pushMessage', {
        type: 'SUCCESS',
        action: 'LOGIN',
        id: Date.now(),
      });
      this.$router.push('/');
    },
    registration() {
      console.log('registration');
    },
  },
};
</script>

<style></style>
