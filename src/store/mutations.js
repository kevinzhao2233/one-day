const mutations = {
  addTodo(state, payload) {
    state.todos.push({
      id: payload.id,
      text: payload.text,
      done: false,
    });
  },

};

export default mutations;
