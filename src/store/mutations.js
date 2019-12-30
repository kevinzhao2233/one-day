const mutations = {
  addTodo(state, payload) {
    state.todos.push({
      id: payload.id,
      text: payload.text,
      done: false,
    });
  },
  toggleDone(state, payload) {
    const willToggleDone = state.todos.findIndex(todo => todo.id === payload.id);
    state.todos[willToggleDone].done = !payload.done;
  },
};

export default mutations;
