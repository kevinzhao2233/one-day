import { DECREASE_SEC, DECREASE_MIN, TIME_OVER } from './mutations-types';

const actions = {
// 倒计时 || 对state中时间进行判断，提交不同的 Mutation
  decreaseTimeAsync({ state, commit }) {
    const countDown = setInterval(() => {
      if (state.time.sec === 0 && state.time.min === 0) {
        commit(TIME_OVER);
        clearInterval(countDown);
      } else if (state.time.sec === 0 && state.time.min !== 0) {
        commit(DECREASE_MIN);
        commit(DECREASE_SEC);
      } else {
        commit(DECREASE_SEC);
      }
    }, 1000);
  },
};

export default actions;
