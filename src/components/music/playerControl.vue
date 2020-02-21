<template>
  <div class="p-box">
    <div class="ctrl" @click="cutSong('prev')">
      <i class="icon fa fa-backward"></i>
    </div>
    <div class="ctrl" @click="togglePlay">
        <i :class="isPlay ? 'icon fa fa-pause' : 'icon fa fa-play'"></i>
    </div>
    <div class="ctrl" @click="cutSong('next')">
      <i class="icon fa fa-forward"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerControl',
  data() {
    return {
    };
  },
  props: {
    isPlay: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    togglePlay() {
      this.$emit('player-cmd', !this.isPlay);
    },
    cutSong(params) {
      this.$emit('player-cmd', params);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.p-box {
  display: flex;
  padding: 12px 6px;
  width: 100%;
  height: 100%;

  .ctrl {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 0 4px;
    border-radius: 12px;
    transition: all 0.2s ease;

    &:hover {
      background-color: $cl-aux6;

      .icon {
        color: $cl-aux1;
      }
    }

    &:active {
      background-color: $cl-font4;
    }

    .icon {
      display: block;
      color: $cl-font4;
      font-size: 24px;
      transition: all 0.2s ease;
    }
  }
}
</style>
