<template>
  <div class="input-box">
    <span :class="isFocused ? 'descript active' : 'descript'">{{ inputTitle }}</span>
    <input
      v-model="copyLoginData"
      class="input"
      :type="inputType"
      @focus="handleFocus('isFocused')"
      @blur="handleBlur('isFocused')"
      autocomplete="off"
    />
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  data() {
    return {
      isFocused: false,
      copyLoginData: this.loginData,
    };
  },
  props: {
    inputTitle: {
      type: String,
    },
    loginData: String,
    inputType: String,
  },
  methods: {
    handleFocus(value) {
      this[value] = true;
    },
    handleBlur(isFocused) {
      if (this.copyLoginData === '') {
        this[isFocused] = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.input-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin: 0;
  width: 100%;
  height: 70px;

  .descript {
    position: absolute;
    bottom: 4px;
    font-size: 18px;
    color: $cl-main1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 10;
    transition: all 0.3s linear;

    &.active {
      bottom: 28px;
      font-size: 12px;
      transition: all 0.3s linear;
    }
  }

  .input {
    flex: 0 0 auto;
    width: 100%;
    height: 28px;
    border: none;
    border-bottom: 2px solid #bbb;
    letter-spacing: 1px;
    font-size: 14px;
    z-index: 20;
  }
}
</style>
