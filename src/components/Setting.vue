<template>
  <div class="container">
    <!-- TODO 和 NOTE 部分 -->
    <div class="box">
      <SwitchComp
        :settingItem="setting.isPlayAudio"
        @toggle-state="toggleState($event)"
      ></SwitchComp>
    </div>
    <hr />
    <!-- 番茄钟部分 -->
    <div class="box">
      <SwitchComp
        :settingItem="setting.isAutoRest"
        @toggle-state="toggleState($event)"
      ></SwitchComp>
      <NumInput :settingItem="setting.workTomato" @change-num="changeTime($event)"></NumInput>
      <NumInput :settingItem="setting.restTomato" @change-num="changeTime($event)"></NumInput>
    </div>
    <hr />
    <!-- 白噪声部分 -->
    <div class="box">
      <SwitchComp :settingItem="setting.keepPlay" @toggle-state="toggleState($event)"></SwitchComp>
      <RadioComp
        :settingItem="setting.whiteNoise"
        @change-pick="changeDefaultWN($event)"
      ></RadioComp>
    </div>
  </div>
</template>

<script>
import SwitchComp from './SwitchComp.vue';
import NumInput from './NumInput.vue';
import RadioComp from './RadioComp.vue';

export default {
  name: 'Setting',

  components: {
    SwitchComp,
    NumInput,
    RadioComp,
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
    // 改变默认白噪声
    changeDefaultWN(e) {
      this.setting[e.name].defaultSelect = e.default;
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
          tit: '休息时依然播放音乐',
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
        whiteNoise: {
          name: 'whiteNoise',
          tit: '选择喜欢的白噪声',
          defaultSelect: 'mountain',
          items: [
            {
              name: 'rainy',
              tit: '雨天',
              src: '',
            },
            {
              name: 'mountain',
              tit: '山野',
              src: '',
            },
            {
              name: 'bonfire',
              tit: '篝火',
              src: '',
            },
            {
              name: 'sun',
              tit: '阳光',
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
