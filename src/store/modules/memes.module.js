import { getOne } from '../../api/api.call';

const state = () => ({
  currentMeme: null,
  loading: true,
  // Тут будут различные данные... Все про мемы, да
});

// actions

const actions = {
  async getMeme({ commit }) {
    commit('changeLoadingState', true);

    try {
      const meme = await getOne();
      commit('setCurrentMeme', meme);
    } catch (error) {
      throw new Error(error);
    } finally {
      commit('changeLoadingState', false);
    }
  },
  loadingStateChange({ commit }) {
    commit('changeLoadingState');
  },
};

// mutations

const mutations = {
  setCurrentMeme(state, payload) {
    state.currentMeme = payload;
  },
  changeLoadingState(state, payload) {
    state.loading = payload;
  },
};

export default {
  state,
  actions,
  mutations,
};
