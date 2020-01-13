<template>
<div class="list c-edition strip">
  <!-- 颜色标签和完成按钮 -->
  <div class="ctrl-box">
    <div class="color-label" :style="{ background: todo.done ? '#fff' : todo.color }"></div>
    <div
      :class="todo.done ? 'small-btn done-todo-btn' : 'small-btn'"
      @click="toggleDone({id: todo.id, done: todo.done, lastUpdate: timeStemp()})"
    ></div>
  </div>
  <!-- 文本内容 -->
  <span :class="todo.done ? 'todo-txt done-todo-txt' : 'todo-txt'">
    {{todo.text}}
  </span>
  <!-- 删除按钮 -->
  <div class="ctrl-box">
    <div
      class="small-btn del-btn"
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
@import '../../assets/lib/scss/config.scss';
@import '../../assets/lib/scss/mixins.scss';

.list {
  margin: 24px auto;
  width: 100%;
  height: 60px;
  transition: all .3s ease-out;
  background-color: $cl-aux1;

  @include respond-to(lg) {
    .del-btn {
      opacity: .2;
      visibility: hidden;
      transition: all .3s ease-out;
    }

    &:hover {
      box-shadow: 0 20px 24px -18px $cl-shallow1;

      .del-btn {
        opacity: 1;
        visibility: visible
      }
    }
  }

  .done-todo-btn {
    background-color: $cl-aux3;
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
    line-height: 60px;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &.done-todo-txt {
      color: $cl-font2;
      text-decoration-line: line-through;
    }
  }
}
</style>
