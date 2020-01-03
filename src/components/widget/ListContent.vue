<template>
<div class="list c-edition strip">
  <div class="ctrl-box">
    <div
       :class="todo.done ? 'small-btn done-todo-btn' : 'small-btn'"
       @click="toggleDone({id: todo.id, done: todo.done})"
     ></div>
  </div>
  <span :class="todo.done ? 'todo-txt done-todo-txt' : 'todo-txt'">
    {{todo.text}}
  </span>
  <div class="ctrl-box">
    <div
      class="small-btn"
      @click="delTodo({id: todo.id})"
    >
    </div>
  </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
  name: 'ListContent',
  props: {
    todo: {
      type: Object,
    },
  },

  computed: {
    // ...mapState([
    //   'todos',
    // ]),

    // ...mapGetters([
    //   'doneTodos',
    //   'undoneTodos',
    // ]),
  },
  methods: {
    ...mapMutations([
      'addTodo',
      'toggleDone',
      'delTodo',
    ]),

    // 生成一个不会重复的id值
    createId() {
      return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${Math.random().toString().substr(2, 5)}`;
    },
  },

};
</script>

<style lang="scss">
.list {
  margin: 12px auto;
  height: 56px;

  .done-todo-btn{
    background-color: #eee;
  }

  .todo-txt {
    display: inline-block;
    flex: 1;
    padding: 0 16px;
    height: 100%;
    line-height: 56px;
    font-size: 18px;

    &.done-todo-txt {
      color: #999;
      text-decoration-line: line-through;
    }
  }
}

.ctrl-box {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
}

.small-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
