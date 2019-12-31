const actions = {
// 倒计时
  decreaseTimeAsync({ state, commit }) {
    const countDown = setInterval(() => {
      if (state.time.sec === 0 && state.time.min === 0) {
        commit('timeOver');
        clearInterval(countDown);
      } else if (state.time.sec === 0 && state.time.min !== 0) {
        commit('decreaseMin');
        commit('decreaseSec');
      } else {
        commit('decreaseSec');
      }
    }, 1000);
  },
};

export default actions;
