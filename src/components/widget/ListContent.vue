<template>
<div class="list c-edition strip">
  <div class="ctrl-box">
    <div class="color-label" :style="{ background: todo.done ? '#fff' : todo.color }"></div>
    <div
       :class="todo.done ? 'small-btn done-todo-btn' : 'small-btn'"
       @click="toggleDone({id: todo.id, done: todo.done, lastUpdate: timeStemp()})"
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
import { getTimeStemp } from '../../assets/lib/myLib';

export default {
  name: 'ListContent',

  props: {
    todo: {
      type: Object,
    },
  },

  methods: {
    ...mapMutations([
      'toggleDone',
      'delTodo',
    ]),

    timeStemp() {
      const time = getTimeStemp();
      return time;
    },

    // 生成一个不会重复的id值
    createId() {
      return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${Math.random().toString().substr(2, 5)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin: 12px auto;
  height: 56px;

  .done-todo-btn {
    background-color: #eee;
  }

  .color-label {
    margin:0 14px 0 -24px;
    width: 10px;
    height: 100%;
    border-radius: 8px 0px 0px 8px;
  }

  .todo-txt {
    display: inline-block;
    flex: 1;
    padding: 0 6px;
    height: 100%;
    line-height: 56px;
    font-size: 18px;

    &.done-todo-txt {
      color: #999;
      text-decoration-line: line-through;
    }
  }
}
</style>
