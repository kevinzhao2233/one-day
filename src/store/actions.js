import axios from 'axios';
import {
  DECREASE_SEC, DECREASE_MIN,
  CHANGE_STATUS_TO_STOP, CHANGE_STATUS_TO_START, CHANGE_STATUS_TO_RESTART, CHANGE_STATUS_TO_END,
  CHANGE_CURRENT_TIME, SAVE_SONG, UPDATE_PROPRESS,
} from './mutations-types';

let countDown = null;
let progessInterval = null;

const actions = {

  // 倒计时开始 || 对state中时间进行判断，提交不同的 Mutation
  startTime({ state, commit }) {
    if (state.time.tomatoStatus === 1) {
      commit(CHANGE_STATUS_TO_START);
    }
    if (state.time.tomatoStatus === 2) {
      commit(CHANGE_STATUS_TO_END);
    }
    countDown = setInterval(() => {
      if (state.time.sec === 0 && state.time.min === 0) {
        commit(CHANGE_CURRENT_TIME, 'toRest');
        // 如果自动进行休息（默认设置）
        if (state.time.isAutoRest) {
          commit(CHANGE_STATUS_TO_END);
          // eslint-disable-next-line no-console
          console.log('自动进入休息番茄');
        } else {
          commit(CHANGE_STATUS_TO_RESTART);
          clearInterval(countDown);
        }
      } else if (state.time.sec === 0 && state.time.min !== 0) {
        commit(DECREASE_MIN);
        commit(DECREASE_SEC);
      } else {
        commit(DECREASE_SEC);
      }
    }, 1000);
  },

  // 暂停 || 清除 interval，设置状态
  stopTime({ commit }) {
    clearInterval(countDown);
    commit(CHANGE_STATUS_TO_STOP);
  },

  // 重新开始 || 清楚 interval、设置状态、
  restartTime({ commit }) {
    clearInterval(countDown);
    commit(CHANGE_STATUS_TO_RESTART);
    commit(CHANGE_CURRENT_TIME, 'restart');
  },

  // 跳过休息 || 清除 interval、重置状态
  jumpTime({ commit }) {
    clearInterval(countDown);
    commit(CHANGE_STATUS_TO_RESTART);
    commit(CHANGE_CURRENT_TIME, 'restart');
  },

  // 异步获取歌曲 || axios Get请求、放到state中
  getSong({ commit }) {
    axios({
      method: 'get',
      url: 'https://api.uomg.com/api/rand.music',
      params: {
        sort: '热歌榜',
        format: 'json',
      },
    })
      .then(async (response) => {
        const res = response.data.data;
        // 创建Audio对象
        const audio = new Audio();
        audio.src = res.url;
        res.currentTime = 0;
        res.duration = 0;
        commit(SAVE_SONG, { res, audio });
      })
      .catch((err) => {
        console.log(err);
        console.log('未能获取歌曲');
      });
  },
  // 更新进度条 || 一秒更新一次
  updateProgress({ state, commit }) {
    if (state.song.audio.paused) {
      commit(UPDATE_PROPRESS);
      progessInterval = setInterval(() => {
        commit(UPDATE_PROPRESS);
      }, 1000);
    } else {
      clearInterval(progessInterval);
    }
  },
};

export default actions;
