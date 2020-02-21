<template>
  <div class="bg-box">
    <div
      class="bg"
      :style="isMusicPage
      ? { backgroundImage: 'url(' + song.list[song.currSong.index].picurl + ')' }
      : { backgroundImage: 'url(' + noise.content.picurl + ')' }"
    ></div>
    <div class="content">
      <PlayBox v-if="isMusicPage"></PlayBox>
      <WhiteNoise v-else :noise="noise" @togle-noise-play="toggleNoisePlay($event)"></WhiteNoise>
    </div>
    <footer class="footer">
      <div class="box" @click="toggleNoiseMusic">
        <span class="txt" :noise="noise" v-if="isMusicPage">白噪声</span>
        <span class="txt" v-else>音乐</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import PlayBox from '@/components/music/PlayBox.vue';
import WhiteNoise from '@/components/music/WhiteNoise.vue';

export default {
  name: 'Music',
  data() {
    return {
      isMusicPage: true,
    };
  },
  components: {
    PlayBox,
    WhiteNoise,
  },
  computed: {
    ...mapState(['song', 'noise']),
  },
  methods: {
    ...mapMutations(['clearAudio', 'playOrPause', 'playOrPauseNoise', 'loadWhiteNoise']),

    toggleNoisePlay(e) {
      this.playOrPauseNoise({ isPlay: e });
    },

    toggleNoiseMusic() {
      if (this.isMusicPage) {
        // 切换为noise
        this.isMusicPage = false;
        this.playOrPause({ isPlay: false });
      } else {
        // 切换为music
        this.isMusicPage = true;
        this.playOrPauseNoise({ isPlay: false });
      }
    },
  },
  mounted() {
    this.loadWhiteNoise();
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

  .footer {
    position: fixed;
    display: flex;
    justify-content: center;
    width: inherit;
    bottom: 0;
    width: 100%;
    height: 90px;
    z-index: 2;

    .box {
      width: 120px;
      height: 48px;
      border-radius: 100px;
      background-color: $cl-main1;
      text-align: center;
      box-shadow: 0 8px 24px -6px $cl-main1;
      cursor: pointer;

      .txt {
        color: $cl-aux1;
        font-size: 22px;
        font-weight: 500;
        line-height: 48px;
        user-select: none;
      }
    }
  }
}
</style>
