<template>
<div class="home">
  <div class="input-box c-edition strip">
    <input
      class="input"
      id="addTodo"
      type="text"
      autocomplete="off"
      v-model="todoData.input"
      :placeholder="todoData.inputPlaceHolder"
    >
    <div class="ctrl-box">
      <div class="small-btn" @click="addTodo({text: todoData.input, id: createId()})"></div>
    </div>
  </div>
  <div class="list c-edition strip" v-for="todo in todos" v-bind:key="todo.id">
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
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      todoData: {
        inputPlaceHolder: '在这里添加TODO',
        input: '',
      },
    };
  },
  computed: {
    ...mapState([
      'todos',
    ]),
  },
  methods: {
    ...mapMutations([
      'addTodo',
      'toggleDone',
      'delTodo',
    ]),

    createId() {
      return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${Math.random().toString().substr(2, 5)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  .strip {
    display: flex;
    flex-wrap: nowrap;
    padding: 0 24px;
    border-radius: 8px;
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px #ededef;
  }

  .input-box {
    margin: 36px auto;
    height: 64px;

    .input {
      flex: 1;
      height: 100%;
      border: none;
      font-size: 18px;
    }
  }

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

      &.done-todo-txt {
        color: #999;
      }
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
