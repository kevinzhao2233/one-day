import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

import todos from './state/todos';
import notes from './state/notes';
import time from './state/time';
import sidebar from './state/sidebar';
import { colors, song, noise } from './state/otherItems';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    todos,
    notes,
    time,
    colors,
    song,
    noise,
    sidebar,
  },
  getters: {
    /**
     * 以下为TODO和番茄钟部分
     */
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    undoneTodos: (state) => state.todos.filter((todo) => !todo.done),
    // 格式化分
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
    // 格式化秒
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

    /**
     * 以下为歌曲部分
     */
    // 音乐轨道上的时间
    mscTime: (state) => {
      const { currentTime, duration } = state.song.currSong;
      if (duration && currentTime) {
        const viewSec = (sec) => {
          const s = Math.floor(sec % 60);
          return s < 10 ? `0${s}` : s;
        };
        const currTime = `${Math.floor(currentTime / 60)}:${viewSec(currentTime)}`;
        const totalTime = `${Math.floor(duration / 60)}:${viewSec(duration)}`;
        const progress = `${(currentTime / duration) * 100}%`;
        return { currTime, totalTime, progress };
      }
      const currTime = '00:00';
      const totalTime = '00:00';
      const progress = '0%';
      return { currTime, totalTime, progress };
    },
  },
  mutations,
  actions,
});

export default store;
