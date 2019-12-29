<template>
<div class="home">
  <div class="input-box c-edition">
    <input
      class="input"
      id="addTodo"
      type="text"
      v-model="input"
      :placeholder="inputPlaceHolder"
    >
    <div class="ctrl-box">
      <div class="add-btn" @click="addTodo"></div>
    </div>
  </div>
  <div class="list c-edition" v-for="todo in todos" v-bind:key="todo.id">{{todo.text}}</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      inputPlaceHolder: '在这里添加TODO',
      input: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    addTodo() {
      this.$store.commit({
        type: 'addTodo',
        text: this.input,
      });
    },
    createRandomId() {
      return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${(new Date()).getTime()}-${Math.random().toString().substr(2, 5)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  .input-box {
    display: flex;
    flex-wrap: nowrap;
    margin: 36px auto;
    padding: 0 24px;
    height: 64px;
    border-radius: 8px;
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px #ededef;

    .input {
      flex: 1;
      height: 100%;
      border: none;
      font-size: 18px;
    }

    .ctrl-box {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      height: 100%;

      .add-btn {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }

  .list {
    margin: 12px auto;
    height: 56px;
    border-radius: 8px;
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px #ededef;
  }
}
</style>
