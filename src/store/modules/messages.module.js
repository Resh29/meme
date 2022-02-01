import { messages } from '../../components/Messages/messages.js';
const state = () => ({
  messages: [],
});

const actions = {
  pushMessage({ commit }, messageObject) {
    const messageType = `${messageObject.action}/${messageObject.type}`;
    const currentMessage = { ...messageObject, text: messages[messageType] };
    commit('setMessage', currentMessage);
  },
};
const mutations = {
  setMessage(state, payload) {
    if (state.messages.length >= 5) {
      state.messages.shift();
    }

    state.messages.push(payload);
    setTimeout(() => {
      state.messages.shift();
    }, 2000);
  },
};

export default {
  state,
  actions,
  mutations,
};

/*
{ 
  type: 'SUCCESS',
  action: 'ADD',
  id: Date.now(),
 }

*/
