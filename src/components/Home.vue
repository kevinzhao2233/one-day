<template>
<div class="home">
  <!-- 输入框组件 -->
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
      <div
        class="small-btn"
        @click="addTodo({text: todoData.input, id: getId(), buildTime: timeStemp()})"
      ></div>
    </div>
  </div>

  <!-- List -->
  <div v-for="undoneTodo in undoneTodos" :key="undoneTodo.id">
    <ListContent :todo="undoneTodo"/>
  </div>
  <div v-for="doneTodo in doneTodos" :key="doneTodo.id">
    <ListContent :todo="doneTodo"/>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ListContent from './widget/ListContent';
import { getTimeStemp, createId } from '../assets/lib/myLib';

export default {
  name: 'Home',
  components: {
    ListContent,
  },
  data() {
    return {
      todoData: {
        inputPlaceHolder: '在这里添加TODO',
        input: '',
      },
    };
  },
  computed: {
    ...mapGetters([
      'doneTodos',
      'undoneTodos',
    ]),
  },
  methods: {
    ...mapMutations([
      'addTodo',
    ]),
    timeStemp() {
      const time = getTimeStemp();
      return time;
    },
    // 生成一个不会重复的id值
    getId() {
      const id = createId();
      return id;
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
}
</style>
