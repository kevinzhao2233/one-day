<template>
<div class="home c-edition">
  <!-- 输入框组件 -->
  <AddTodoList/>

  <!-- List -->
  <draggable v-model="todos" forceFallvack: true>
    <transition-group name="fade"
      enter-active-class="animated zoomIn"
      leave-active-class="animated fadeOutRight">
      <div v-for="todo in todos" :key="todo.id">
        <ListContent :todo="todo" v-if="!todo.done"/>
      </div>
    </transition-group>
  </draggable>

  <br>
  <transition-group name="fade"
    enter-active-class="animated zoomIn"
    leave-active-class="animated fadeOutRight"
  >
    <div v-for="doneTodo in doneTodos" :key="doneTodo.id">
      <ListContent :todo="doneTodo"/>
    </div>
  </transition-group>
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
@import '../assets/lib/scss/mixins.scss';

// 覆盖默认时间
.animated {animation-duration: 0.5s;}

.home {
  width: 100%;
  overflow: hidden;

  @include respond-to(lg) {
    width: 1026px;
  }
}
</style>
