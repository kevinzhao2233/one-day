<template>
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
        @click="addTodo({
          text: todoData.input,
          id: getId(),
          buildTime: timeStemp(),
          lastUpdate: timeStemp()
        })"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { getTimeStemp, createId } from '@/assets/lib/myLib';

export default {
  name: 'AddTodoList',

  data() {
    return {
      todoData: {
        inputPlaceHolder: '在这里添加TODO',
        input: '',
      },
    };
  },

  methods: {
    ...mapMutations([
      'addTodo',
    ]),
    // 生产时间戳
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

<style lang="scss">
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
</style>
