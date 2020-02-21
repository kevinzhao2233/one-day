<template>
  <div class="p-box">
    <div
      :class="isPlay ? 'outer active' : 'outer'"
      :style="{ backgroundImage: 'url(' + pic + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'playerDisc',
  props: {
    isPlay: {
      type: Boolean,
      required: true,
    },
    pic: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.p-box {
  position: relative;
  width: 100%;
  height: 100%;

  .outer {
    position: absolute;
    bottom: 24px;
    right: 0;
    width: 130px;
    height: 130px;
    background-color: $cl-aux2;
    background-size: cover;
    border-radius: 50%;
    border: 10px solid $cl-aux1;
    transition: all 0.3s ease;

    &.active {
      bottom: 42px;
      border: 6px solid $cl-aux1;
      animation: rotate 6s linear 0.2s infinite;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
