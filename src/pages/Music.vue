<template>
  <div class="bg-box">
    <div class="bg" :style="{backgroundImage: 'url(' + imgSrc + ')'}"></div>
    <div class="content">
      <PlayBox></PlayBox>
    </div>
  </div>
</template>

<script>
import PlayBox from '@/components/music/PlayBox.vue';

export default {
  name: 'Music',
  components: {
    PlayBox,
  },
  data() {
    return {
      imgSrc: 'http://p1.music.126.net/94ofbrM9sC9cQzKf2rO2GQ==/109951164297796644.jpg',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.bg-box {
  position: relative;
  padding-top: 54px;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .bg {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: $cl-aux5;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    filter: blur(24px) brightness(108%);
    -webkit-filter: blur(24px) brightness(108%);
    z-index: 1;
  }

  .content {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}
</style>
