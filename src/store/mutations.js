const mutations = {

  // 添加 TODO || 直接向数组中 push 即可
  addTodo(state, payload) {
    state.todos.push({
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
};

export default mutations;
