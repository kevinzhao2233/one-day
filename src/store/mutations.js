const mutations = {
  addTodo(state, payload) {
    state.todos.push({
      id: 4,
      text: payload.text,
      done: false,
    });
  },
};

export default mutations;
