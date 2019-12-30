import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      { id: 1, text: '点击左侧小按钮，可以完成这项TODO', done: false },
      { id: 2, text: '这是一项已经完成的TODO', done: true },
      { id: 3, text: '点击右侧可以删除这条TODO，但它还是未完成的', done: false },
    ],
  },
  getters: {

  },
  mutations,
  actions,
});

export default store;
