<template>
  <div :class="inputIsFocused ? 'input-box c-edition focused' : 'input-box c-edition'">
    <input
      class="input"
      type="text"
      autocomplete="off"
      @focus="foucusInput()"
      @blur="unFocusInput()"
      @keyup.enter="
        addTodo({
          text: todoData.input,
          id: getId(),
          buildTime: timeStemp(),
          lastUpdate: timeStemp(),
          colorLabel: todoData.currentColor
        })
      "
      v-model="todoData.input"
      :placeholder="todoData.inputPlaceHolder"
    />
    <div class="ctrl-box">
      <!-- 彩色标签组件 -->
      <ColorLabel :colors="colors" @get-color-label="getColorLabel($event)"></ColorLabel>
      <div
        class="small-btn icon fa fa-plus-circle"
        @click="
          addTodo({
            text: todoData.input,
            id: getId(),
            buildTime: timeStemp(),
            lastUpdate: timeStemp(),
            colorLabel: todoData.currentColor
          })
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { getTimeStemp, createId } from '@/assets/lib/myLib';
import ColorLabel from './ColorLabel.vue';

export default {
  name: 'AddTodoList',

  components: {
    ColorLabel,
  },

  data() {
    return {
      todoData: {
        inputPlaceHolder: '在这里添加TODO',
        input: '',
        currentColor: '#ff6700',
      },
      isShowColorLabel: false,
      inputIsFocused: false,
    };
  },

  computed: {
    ...mapState(['colors']),
  },

  methods: {
    ...mapMutations(['addTodo']),

    foucusInput() {
      this.inputIsFocused = true;
    },

    unFocusInput() {
      this.inputIsFocused = false;
    },

    getColorLabel(color) {
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

<style lang="scss" scoped>
@import "@/assets/lib/scss/mixins.scss";
@import "@/assets/lib/scss/config.scss";

.input-box {
  display: flex;
  flex-wrap: nowrap;
  width: 95%;
  height: 64px;
  padding: 0 24px;
  background-color: $cl-aux1;
  border-radius: 8px;
  border: 1px solid $cl-aux2;
  box-shadow: 0 4px 12px $cl-aux3;
  transition: all 0.3s ease-out;

  &.focused {
    border: 1px solid $cl-shallow1;
    box-shadow: 0 16px 24px -12px $cl-aux4;
  }

  @include respond-to(lg) {
    width: 1026px;
  }

  .input {
    flex: 1;
    height: 100%;
    border: none;
    font-size: 17px;
  }
}

.icon {
  color: $cl-main1;
  font-size: 28px;
}
</style>
