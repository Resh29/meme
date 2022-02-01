const state = () => ({
  user: null,
});

const user = {
  name: 'Some name',
  memes: [
    {
      author: 'TurtlesTurnMeOn',
      nsfw: false,
      postLink: 'https://redd.it/shmay0',
      preview: (4)[
        ('https://preview.redd.it/wb8tiy6ii5f81.jpg?width=10…o=webp&s=aa5d71bc5e0351f9d6d2f4f78b8cd48aa4b147ea',
        'https://preview.redd.it/wb8tiy6ii5f81.jpg?width=21…o=webp&s=9e4d2785784917a1252539b1eaefc134fba37285',
        'https://preview.redd.it/wb8tiy6ii5f81.jpg?width=32…o=webp&s=c3301375b2ec8b4b5e9aa4105f8529c4cc8c308b',
        'https://preview.redd.it/wb8tiy6ii5f81.jpg?width=64…o=webp&s=0b27f4c6040c3c9b56581b032e54c4f68daa1166')
      ],
      spoiler: false,
      subreddit: 'dankmemes',
      title: 'Oppressive double standards',
      ups: 1340,
      url: 'https://i.redd.it/wb8tiy6ii5f81.jpg',
    },
  ],
  token: '12345678',
};

const actions = {
  getUser({ commit }, token) {
    if (token) {
      console.log(token);
      commit('setUser', user);
    }
    commit('setUser', user);
  },
  logOut({ commit }) {
    commit('userLogout');
  },
};

const mutations = {
  setUser(state, payload) {
    localStorage.setItem('memes-user-token', payload.token);
    state.user = payload;
  },
  userLogout(state) {
    state.user = null;
    localStorage.removeItem('memes-user-token');
  },
};

export default {
  state,
  actions,
  mutations,
};
