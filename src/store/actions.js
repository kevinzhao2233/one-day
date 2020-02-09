import {
  DECREASE_SEC, DECREASE_MIN,
  CHANGE_STATUS_TO_STOP, CHANGE_STATUS_TO_START, CHANGE_STATUS_TO_RESTART, CHANGE_STATUS_TO_END,
  CHANGE_CURRENT_TIME,
} from './mutations-types';

let countDown = null;

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

  jumpTime({ commit }) {
    clearInterval(countDown);
    commit(CHANGE_STATUS_TO_RESTART);
    commit(CHANGE_CURRENT_TIME, 'restart');
  },
};

export default actions;
