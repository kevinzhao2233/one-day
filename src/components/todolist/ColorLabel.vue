<template>
  <div class="small-btn color-label" @click="addColorLabel()" :style="{ background: currentColor }">
    <div class="color-box" v-show="isShowColorLabel">
      <i
        class="color"
        :style="{ background: col }"
        v-for="(col, index) in colors"
        :key="index"
        @click="selectColor(col)"
      >
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorLabel',

  data() {
    return {
      isShowColorLabel: false,
      currentColor: '#ff6700',
    };
  },

  props: {
    colors: Object,
  },

  methods: {
    addColorLabel() {
      this.isShowColorLabel = !this.isShowColorLabel;
    },

    selectColor(color) {
      this.currentColor = color;
      this.$emit('get-color-label', this.currentColor);
    },
  },

  mounted() {
    // 点击选框之外的地方，收起选框
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        // 如果点击的target不是这个组件，就收起来
        this.isShowColorLabel = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.color-label {
  position: relative;
  margin-right: 16px;

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
    background-color: $cl-aux1;
    box-shadow: 0 8px 16px -2px $cl-aux4;
    cursor: default;

    .color {
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s linear;

      &:hover {
        width: 30px;
        height: 30px;
        box-shadow: 0 2px 8px -1px $cl-font3;
        transition: all 0.2s linear;
      }
    }
  }
}
</style>
