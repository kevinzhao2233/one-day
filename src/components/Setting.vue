<template>
  <div class="container">
    <div class="box">
      <RadioConp
        :settingItem="setting.isPlayAudio"
        @toggle-state="toggleState($event)"
      ></RadioConp>
    </div>
    <div class="box">
      <RadioConp
        :settingItem="setting.isAutoRest"
        @toggle-state="toggleState($event)"
      ></RadioConp>
    </div>
    <div class="box">
      <RadioConp
        :settingItem="setting.keepPlay"
        @toggle-state="toggleState($event)"
      ></RadioConp>
    </div>
  </div>
</template>

<script>
import RadioConp from './RadioConp.vue';

export default {
  name: 'Setting',

  components: {
    RadioConp,
  },

  methods: {
    toggleState(e) {
      this.setting[e.name].state = e.state;
    },
  },

  data() {
    return {
      setting: {
        isPlayAudio: {
          name: 'isPlayAudio',
          tit: '播放TODO页音效',
          state: true,
        },
        isAutoRest: {
          name: 'isAutoRest',
          tit: '自动开始休息番茄',
          state: true,
        },
        keepPlay: {
          name: 'keepPlay',
          tit: '一直播放音乐',
          state: false,
        },
        selectWhiteNoise: {
          tit: '选择喜欢的白噪声',
          items: [
            {
              name: '雨天',
              src: '',
            },
            {
              name: '森林',
              src: '',
            },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
