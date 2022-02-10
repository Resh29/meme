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
          <input type="email" class="auth-page__form-input" v-model="loginEmail" />
        </div>
        <div class="auth-page__form-container">
          <input type="password" class="auth-page__form-input" v-model="loginPassword" />
        </div>
        <div class="auth-page__form-buttons">
          <button type="submit" class="auth-page__btn btn primary">Login</button>
          <button type="button" class="auth-page__btn btn" @click.stop="isLogin = false">
            to registration...
          </button>
        </div>
      </form>
      <form
        v-else
        v-on:submit.prevent="registration"
        class="auth-page__form registration"
      >
        <div class="auth-page__form-container">
          <input type="email" class="auth-page__form-input" v-model="email" />
        </div>
        <div class="auth-page__form-container">
          <input type="password" class="auth-page__form-input" v-model.trim="password" />
        </div>
        <div class="auth-page__form-container">
          <input
            type="password"
            class="auth-page__form-input"
            v-model.trim="verifyedPassword"
          />
        </div>
        <div class="auth-page__form-container">
          <input type="text" class="auth-page__form-input" v-model="name" />
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
      email: '',
      password: '',
      verifyedPassword: '',
      name: '',
      loginEmail: '',
      loginPassword: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('userStore/getUser', {
        userData: { email: this.loginEmail, password: this.loginPassword },
      });
      this.$store.dispatch('pushMessage', {
        type: 'SUCCESS',
        action: 'LOGIN',
        id: Date.now(),
      });
      this.$router.push('/');
    },
    async registration() {
      if (this.password === this.verifyedPassword) {
        const newUser = {
          email: this.email,
          name: this.name,
          password: this.password,
        };
        try {
          this.$store.dispatch('userStore/registration', { payload: newUser });
          this.$store.dispatch('pushMessage', {
            type: 'SUCCESS',
            action: 'REGISTRATION',
            id: Date.now(),
          });
        } catch (error) {
          this.$store.dispatch('pushMessage', {
            type: 'ERROR',
            action: 'REGISTRATION',
            id: Date.now(),
          });
        }
      } else {
        console.log('net');
      }
    },
  },
};
</script>

<style></style>
