import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      { id: 1, text: 'dinner', done: true },
      { id: 2, text: 'lunch', done: true },
      { id: 3, text: 'breakfast', done: false },
    ],
    will: true,
  },
  getters: {

  },
  mutations,
  actions,
});

export default store;
