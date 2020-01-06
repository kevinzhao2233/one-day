import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos: [
      { id: '1578026976920-85058-1f6d', text: '点击左侧小按钮，可以完成这项TODO', done: false, buildTime: 1578026976920, lastUpdate: 1578026976920, color: '#ff6700' },
      { id: '1578027011004-77892-363b', text: '这是一项已经完成的TODO', done: true, buildTime: 1578027011004, lastUpdate: 1578027011004, color: '#ff6700' },
      { id: '1578027031614-38447-9025', text: '点击右侧可以删除这条TODO，但它还是未完成的', done: false, buildTime: 1578027031614, lastUpdate: 1578027031614, color: '#ff6700' },
    ],
    time: {
      min: 0, // 当前番茄时间
      sec: 4,
      initMin: 25, // 初始化工作番茄时间
      initSec: 0,
      restMin: 5, // 休息番茄时间
      restSec: 0,
      // isTimeOver: false, // 番茄时间到 TODO:暂时搁着，逻辑有问题
      isAutoRest: true, // 是否自动进入休息番茄
      tomatoStatus: 1, // （番茄状态） 1 工作状态、2 休息状态
      status: 1, // （按钮状态） 1 番茄未开始、2 番茄已经开始、3 番茄暂停、4 休息番茄-只有跳过按钮
    },
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    undoneTodos: state => state.todos.filter(todo => !todo.done),

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
