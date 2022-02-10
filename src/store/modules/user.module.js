const state = () => ({
  user: null,
});

const HOST = 'http://localhost:3000/';

const userMemesActions = {
  async saveMeme({ dispatch }, payload) {
    try {
      await fetch(HOST + 'meme-api/save/' + payload.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.meme),
      }).then(() =>
        dispatch(
          'pushMessage',
          {
            type: 'SUCCESS',
            action: 'SAVE',
            id: Date.now(),
          },
          { root: true }
        )
      );
    } catch (error) {
      throw new Error(error);
    }
  },
};

const actions = {
  async getUser({ commit }, payload) {
    console.log(payload);
    if (payload.token) {
      await fetch(HOST + 'meme-api/auth', {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${payload.token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
        .then((res) => res.json())
        .then((res) => commit('userStore/setUser', res, { root: true }))
        .catch((err) => console.error(err));
    } else if (payload.userData) {
      try {
        await fetch(HOST + 'meme-api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload.userData),
        })
          .then((res) => res.json())
          .then((res) => commit('userStore/setUser', res, { root: true }));
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  async registration({ commit }, payload) {
    try {
      await fetch(HOST + 'meme-api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => commit('userStore/setUser', res, { root: true }));
    } catch (error) {
      throw new Error(error);
    }
  },
  logOut({ commit }) {
    commit('userStore/userLogout', null, { root: true });
  },
  ...userMemesActions,
};

const mutations = {
  setUser(state, payload) {
    localStorage.setItem('memes-user-token', payload.token);
    state.user = payload;
    console.log(state.user);
  },
  userLogout(state) {
    state.user = null;
    localStorage.removeItem('memes-user-token');
  },
  fakeCommit() {
    console.log('fake commit work');
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
