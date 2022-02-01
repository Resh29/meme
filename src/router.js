import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home/Home.vue';
import MemesList from './views/MemesList/MemesList';

const routes = [
  { path: '/', component: Home },
  { path: '/my-list', component: MemesList },
  { path: '/auth', component: () => require('./views/AuthPage/AuthPage.vue') },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
