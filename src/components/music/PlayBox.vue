<template>
  <div class="box">
    <div class="circle">
      <playerDisc :isPlay="playState" :pic="song.list[song.currSong.index].picurl"></playerDisc>
    </div>
    <div class="control">
      <playerControl :isPlay="playState" @player-cmd="playerCtrl($event)"></playerControl>
    </div>
    <div :class="playState ? 'track active' : 'track'">
      <playerTrack :isPlay="playState" :song="song" :audio="song.audio"></playerTrack>
    </div>
    <audio :src="song.currSong.url" ref="audioCC"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
      music: this.song,
    };
  },
  computed: {
    ...mapState(['song']),
    playState() {
      return this.song.currSong.isPlay;
    },
    songIndex() {
      return this.song.currSong.index;
    },
  },
  watch: {
    songIndex() {
      // 发生切歌
      if (this.playState) {
        this.song.audio.addEventListener('ended', () => {
          this.$store.dispatch({
            type: 'nextSong',
          });
        });
      }
    },
    playState() {
      this.updateProg();
    },
  },
  methods: {
    ...mapMutations(['playOrPause']),

    // 更新进度条
    updateProg() {
      this.$nextTick(() => {
        this.$store.dispatch({
          type: 'updateProgress',
        });
      });
    },

    playerCtrl(e) {
      switch (e) {
        case true:
          this.playOrPause({ isPlay: true });
          this.$nextTick(() => this.song.audio.play());
          break;
        case false:
          this.playOrPause({ isPlay: false });
          this.$nextTick(() => this.song.audio.pause());
          // this.updateProg();
          break;
        case 'next':
          this.$store.dispatch({
            type: 'nextSong',
          });
          break;
        case 'prev':
          this.$store.dispatch({
            type: 'prevSong',
          });
          break;
        default:
          break;
      }
    },
    // dispatch，获取歌曲
    getSong() {
      this.$store.dispatch({
        type: 'getSong',
      });
    },
  },
  mounted() {
    // 组件挂载后默认加载一首歌
    if (this.song.currSong.index < 1) {
      this.getSong();
    }
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
