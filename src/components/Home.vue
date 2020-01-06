<template>
<div class="home">
  <!-- 输入框组件 -->
  <AddTodoList/>

  <!-- List -->
  <draggable v-model="todos" :options="{ forceFallvack: true }">
    <div v-for="todo in todos" :key="todo.id">
      <ListContent :todo="todo" v-if="!todo.done"/>
    </div>
  </draggable>

  <div v-for="doneTodo in doneTodos" :key="doneTodo.id">
    <ListContent :todo="doneTodo"/>
  </div>
</div>
</template>

<script>
import draggable from 'vuedraggable';
import { mapGetters } from 'vuex';
import ListContent from './widget/ListContent';
import AddTodoList from './widget/AddTodoList';

export default {
  name: 'Home',
  components: {
    ListContent,
    AddTodoList,
    draggable,
  },

  computed: {
    ...mapGetters([
      'doneTodos',
      'undoneTodos',
    ]),

    undoneTodos: {
      get() {
        return this.$store.getters.undoneTodos;
      },
      set(value) {
        // eslint-disable-next-line no-console
        console.log(value);
        this.$store.commit('updateTodos', value);
      },
    },

    todos: {
      get() {
        return this.$store.state.todos;
      },
      set(value) {
        this.$store.commit('updateTodos', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
