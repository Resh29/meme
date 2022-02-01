import { createStore } from 'vuex';
import memes from './modules/memes.module';
import messages from './modules/messages.module';
import userStore from './modules/user.module';

const state = () => ({
  // loading: true,
});

const actions = {};

const mutations = {};

export const store = createStore({
  modules: { memes, messages, userStore },
  state,
  actions,
  mutations,
});
