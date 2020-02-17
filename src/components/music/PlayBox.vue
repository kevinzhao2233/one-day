<template>
  <div class="box">
    <div class="circle">
      <playerDisc :isPlay="isPlay"></playerDisc>
    </div>
    <div class="control">
      <playerControl :isPlay="isPlay" @player-cmd="playerCtrl($event)"></playerControl>
    </div>
    <div :class="isPlay ? 'track active' : 'track'">
      <playerTrack :isPlay="isPlay"></playerTrack>
    </div>
  </div>
</template>

<script>
import playerDisc from './playerDisc.vue';
import playerControl from './playerControl.vue';
import playerTrack from './playerTrack.vue';

export default {
  name: 'PlayBox',
  components: {
    playerDisc,
    playerControl,
    playerTrack,
  },
  data() {
    return {
      isPlay: false,
    };
  },
  methods: {
    playerCtrl(e) {
      if (typeof e === 'boolean') {
        this.isPlay = e;
      } else if (e === 'next') {
        console.log('下一曲');
      } else if (e === 'prev') {
        console.log('上一曲');
      } else {
        console.error('????? 还能有别的？');
      }
    },
    getSong() {

    },
  },
  mounted() {
    // 组件挂载后默认加载一首歌
    this.getSong();
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/lib/scss/config.scss";
@import "@/assets/lib/scss/mixins.scss";

.box {
  position: relative;
  display: flex;
  width: 95%;
  height: 100px;
  background-color: $cl-aux1;
  border-radius: 16px;
  box-shadow: 0 30px 80px -10px $cl-font3;
  z-index: 100;

  @include respond-to(xs) {
    width: 420px;
  }

  .circle {
    flex: 2;
    background-color: $cl-aux1;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
    z-index: 100;
  }

  .control {
    flex: 3;
    background-color: $cl-aux1;
    border-bottom-right-radius: 16px;
    border-top-right-radius: 16px;
    z-index: 100;
  }

  .track {
    position: absolute;
    transform: translateX(5%) translateY(0);
    width: 92%;
    height: 100px;
    background-color: $cl-aux5;
    opacity: 0.8;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    z-index: 10;
    transition: all 0.3s ease;

    &.active {
      transform: translateX(5%) translateY(-95%);
    }
  }
}
</style>
