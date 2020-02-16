import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

import todos from './state/todos';
import time from './state/time';
import sidebar from './state/sidebar';
import colors from './state/otherItems';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos,
    time,
    colors,
    sidebar,
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    undoneTodos: (state) => state.todos.filter((todo) => !todo.done),

    formatMin: (state) => {
      const { min } = state.time;
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
      const { sec } = state.time;
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
