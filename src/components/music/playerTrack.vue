<template>
  <div class="p-box">
    <div class="content">
      <span class="msc-name">{{ song.list[song.currSong.index].name }}</span>
      <span class="art-name">{{ song.list[song.currSong.index].artistsname }}</span>
      <div class="progress-box">
        <div class="time">
          <span>{{ mscTime.currTime }}</span>
          <span>{{ mscTime.totalTime }}</span>
        </div>
        <div class="progress">
          <div class="pro total"></div>
          <div class="pro hover"></div>
          <div class="pro current" :style="{width: mscTime.progress}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'playerTrack',
  computed: {
    ...mapGetters(['mscTime']),
  },
  props: {
    isPlay: {
      type: Boolean,
      required: true,
    },
    song: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.p-box {
  width: 100%;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    margin-left: 40%;
    padding: 12px;

    .msc-name {
      font-weight: bold;
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .art-name {
      margin: 6px 0 6px 0;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .time {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 13px;
      color: $cl-main1;
    }

    .progress {
      position: relative;
      width: 100%;
      height: 12px;
      line-height: 10px;
      // background-color: #fff;
      // cursor: pointer;

      .pro {
        position: absolute;
        margin-top: 3px;
        width: 100%;
        height: 4px;
        border-radius: 3px;

        &.total {
          background-color: $cl-shallow1;
        }

        &.hover {
          width: 0;
          background-color: $cl-shallow1;
        }

        &.current {
          width: 0;
          background-color: $cl-main1;
          box-shadow: 2px 0 2px $cl-main1;
        }
      }
    }
  }
}
</style>
