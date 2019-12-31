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
    time: {
      min: 1,
      sec: 7,
      isTimeOver: false,
    },
  },
  getters: {
    formatMin: (state) => {
      const min = state.time.min;
      let strMin = '';
      if (min < 10 && min > -1) {
        strMin = `0${min}`;
      } else if (min >= 10) {
        strMin = `${min}`;
      } else {
        strMin = '00';
      }
      return strMin;
    },

    formatSec: (state) => {
      const sec = state.time.sec;
      let strSec = '';
      if (sec < 10 && sec >= 0) {
        strSec = `0${sec}`;
      } else {
        strSec = `${sec}`;
      }
      return strSec;
    },
  },
  mutations,
  actions,
});

export default store;
