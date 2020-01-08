<template>
  <div class="input-box c-edition strip">
    <input
      class="input"
      id="addTodo"
      type="text"
      autocomplete="off"
      @keyup.enter="addTodo({
        text: todoData.input,
        id: getId(),
        buildTime: timeStemp(),
        lastUpdate: timeStemp(),
        colorLabel: todoData.currentColor,
      })"
      v-model="todoData.input"
      :placeholder="todoData.inputPlaceHolder"
    >
    <div class="ctrl-box">
      <div
        class="small-btn color-label"
        @click="addColorLabel()"
        :style="{ background: todoData.currentColor }"
      >
        <div class="color-box" v-show="isShowColorLabel">
          <i
            v-for="(col, index) in colors"
            class="color"
            @click="selectColor(col)"
            :style="{ background: col }"
            :key="index">
          </i>
        </div>
      </div>
      <div
        class="small-btn"
        @click="addTodo({
          text: todoData.input,
          id: getId(),
          buildTime: timeStemp(),
          lastUpdate: timeStemp(),
          colorLabel: todoData.currentColor,
        })"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getTimeStemp, createId } from '@/assets/lib/myLib';

export default {
  name: 'AddTodoList',

  data() {
    return {
      todoData: {
        inputPlaceHolder: '在这里添加TODO',
        input: '',
        currentColor: '#ff6700',
      },
      isShowColorLabel: false,
    };
  },

  computed: {
    ...mapState([
      'colors',
    ]),
  },

  methods: {
    ...mapMutations([
      'addTodo',
    ]),

    addColorLabel() {
      this.isShowColorLabel = !this.isShowColorLabel;
    },

    selectColor(color) {
      this.todoData.currentColor = color;
    },

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
@import '../../assets/lib/scss/mixins.scss';
.strip {
  display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0 24px;
    border-radius: 8px;
    border: 1px solid #efefef;
    box-shadow: 0 4px 12px #ededef;

    @include respond-to(lg) {
      width: 1026px;
    }

    .color-label {
      position: relative;

      .color-box {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: space-around;
        top: 26px;
        right: -26px;
        width: 220px;
        height: 50px;
        border-radius: 12px;
        background-color: #FFF;
        box-shadow: 0 8px 16px -2px #DDD;
        cursor: default;

        .color {
          display: block;
          width: 24px;
          height: 24px;
          border-radius: 8px;
          cursor: pointer;
        }
      }
    }
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
