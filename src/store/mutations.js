const mutations = {

  // 添加 TODO || 直接插入到数组首位
  addTodo(state, payload) {
    state.todos.unshift({
      id: payload.id,
      text: payload.text,
      done: false,
    });
  },

  // 切换一条 TODO 的完成状态 || 通过 id，找到要删除的下标，用splice删除
  toggleDone(state, payload) {
    const willToggleDone = state.todos.findIndex(todo => todo.id === payload.id);
    state.todos[willToggleDone].done = !payload.done;
  },

  // 删除一项 TODO || 通过 id，找到要删除的下标，用splice删除。如果使用delete删除会将被删项都变成 undefined，无法用 v-for
  delTodo(state, payload) {
    const willDeleteTodo = state.todos.findIndex(todo => todo.id === payload.id);
    state.todos.splice(willDeleteTodo, 1);
  },

  // 倒计时-分钟 || 直接减一即可，异步进行计算的部分在action中
  decreaseMin(state) {
    state.time.min -= 1;
  },

  // 倒计时-秒 || 直接减一
  decreaseSec(state) {
    const sec = state.time.sec;
    if (sec === 0) {
      state.time.sec = 59;
    } else {
      state.time.sec -= 1;
    }
  },

  // 时间到 || 给标志
  timeOver(state) {
    state.time.isTimeOver = true;
  },
};

export default mutations;
