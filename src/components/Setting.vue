<template>
  <div class="container">
    <div class="box">
      <RadioConp
        :settingItem="setting.isPlayAudio"
        @toggle-state="toggleState($event)"
      ></RadioConp>
    </div>
    <hr>
    <div class="box">
      <RadioConp
        :settingItem="setting.isAutoRest"
        @toggle-state="toggleState($event)"
      ></RadioConp>
      <NumInput
        :settingItem="setting.workTomato"
        @change-num="changeTime($event)"
      ></NumInput>
      <NumInput
        :settingItem="setting.restTomato"
        @change-num="changeTime($event)"
      ></NumInput>
    </div>
    <hr>
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
import NumInput from './NumInput.vue';

export default {
  name: 'Setting',

  components: {
    RadioConp,
    NumInput,
  },

  methods: {
    // 开关按钮
    toggleState(e) {
      this.setting[e.name].state = e.state;
    },
    // 改变番茄钟时间
    changeTime(e) {
      this.setting[e.name].time = e.time;
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
        workTomato: {
          name: 'workTomato',
          tit: '工作番茄时长(分)',
          time: 25,
        },
        restTomato: {
          name: 'restTomato',
          tit: '休息番茄时长(分)',
          time: 5,
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

hr {
  margin: 24px auto;
  width: 100%;
  height: 1px;
  border: none;
  outline: none;
  background-color: #ddd;
}
</style>
