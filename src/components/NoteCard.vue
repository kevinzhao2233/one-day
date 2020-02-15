<template>
  <textarea-autosize
    :class="isFocused ? 'focused card' : 'card'"
    placeholder="Type something here..."
    v-model="propNote"
    :min-height="30"
    :max-height="350"
    @focus.native="focused"
    @blur.native="unFocused"
  />
</template>

<script>
export default {
  neme: 'NoteCard',

  props: {
    note: String,
  },
  data() {
    return {
      propNote: this.note,
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.card {
  display: block;
  margin: 0 auto 30px 0;
  padding: 12px 24px 2px 24px;
  width: 100%;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #efefef;
  box-shadow: 0 10px 15px $cl-aux3;
  font-size: 18px;
  font-family: "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  line-height: 1.7;
  transition: box-shadow 0.3s ease-in-out,
              transform 0.3s linear;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 24px -18px $cl-shallow1;
  }
}

.focused {
  border-color: $cl-shallow1;
}
</style>
