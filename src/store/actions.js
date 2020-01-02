import {
  DECREASE_SEC, DECREASE_MIN, TIME_OVER,
  CHANGE_STATUS_TO_STOP, CHANGE_STATUS_TO_START, CHANGE_STATUS_TO_RESTART, CHANGE_STATUS_TO_END,
  CHANGE_CURRENT_TIME } from './mutations-types';

let countDown = null;

const actions = {

  // 倒计时开始 || 对state中时间进行判断，提交不同的 Mutation
  startTime({ state, commit }) {
    commit(CHANGE_STATUS_TO_START);
    countDown = setInterval(() => {
      if (state.time.sec === 0 && state.time.min === 0) {
        if (state.time.isAutoRest) {
          commit(CHANGE_STATUS_TO_END);
          commit(CHANGE_CURRENT_TIME, 'toRest');
          commit(TIME_OVER);
        } else {
          commit(TIME_OVER);
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

  jumpTime({ commit }) {
    clearInterval(countDown);
    commit(CHANGE_STATUS_TO_RESTART);
    commit(CHANGE_CURRENT_TIME, 'restart');
  },
};

export default actions;
