import { getOne } from '../../api/api.call';

const state = () => ({
  currentMeme: null,
  loading: true,
  memes: [],
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
  async getUserMemesCollection({ commit }, payload) {
    try {
      await fetch('http://localhost:3000/meme-api/memes-collection/' + payload)
        .then((res) => res.json())
        .then((res) => commit('setMemesCollection', res));
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteMemeFromCollection({ dispatch }, payload) {
    try {
      await fetch('http://localhost:3000/meme-api/delete/' + payload.id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: payload.memeId }),
      }).then(() => {
        dispatch('getUserMemesCollection', payload.id);
      });
    } catch (error) {
      throw new Error(error);
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
  setMemesCollection(state, payload) {
    if (payload.length) {
      state.memes = payload;
    }
  },
};

export default {
  // namespaced: true,
  state,
  actions,
  mutations,
};
