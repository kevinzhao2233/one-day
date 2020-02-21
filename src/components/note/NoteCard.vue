<template>
  <div class="box">
    <textarea-autosize
      :class="isFocused ? 'focused card' : 'card'"
      placeholder="在这里写点什么吧~~"
      v-model="propNote"
      :min-height="20"
      :max-height="350"
      @focus.native="focused"
      @blur.native="unFocused"
      @input="inputChange"
    />
    <div class="option">
      <div class="icon-box">
        <i class="icon fa fa-ellipsis-v"></i>
      </div>
      <div class="opt-box" @mousedown="delNote">
        <span class="item">删除</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  neme: 'NoteCard',

  props: {
    // { id: String, content: String }
    note: Object,
  },

  data() {
    return {
      propNote: this.note.content,
      isFocused: false,
    };
  },

  methods: {
    focused() {
      this.isFocused = true;
    },
    unFocused() {
      this.isFocused = false;
    },
    delNote() {
      this.$emit('delete-note', this.note.id);
    },
    inputChange() {
      this.$emit('edit-note', { id: this.note.id, content: this.propNote });
    },
  },
  beforeDestroy() {
    // 组件即将销毁时对所有note都保存一次
    this.unFocused();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.box {
  display: flex;
  margin: 0 auto 30px 0;
  padding: 12px 12px 2px 24px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #efefef;
  box-shadow: 0 10px 15px $cl-aux3;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 16px 24px -18px $cl-shallow1;
  }

  .card {
    flex: 1;
    display: block;
    border: none;
    font-size: 18px;
    font-family: "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    line-height: 1.7;
  }

  .option {
    position: relative;
    flex: 0 0 1;
    margin-left: 12px;
    width: 30px;
    height: 36px;
    color: $cl-font3;
    cursor: pointer;

    .icon-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 30px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .opt-box {
      position: absolute;
      right: 0;
      top: 34px;
      width: 60px;
      height: 32px;
      background-color: $cl-aux1;
      border: 1px solid $cl-font3;
      border-radius: 4px;
      text-align: center;
      display: none;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px -4px $cl-shallow1;
      color: $cl-main1;

      .item {
        line-height: 30px;
      }

      &:hover {
        background-color: $cl-main1;
        color: $cl-aux1;
      }
    }

    &:hover {
      .icon-box {
        background-color: $cl-main1;
        color: $cl-aux1;
      }

      .opt-box {
        border-color: $cl-main1;
        display: block;
      }
    }
  }
}
</style>
