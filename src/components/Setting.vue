<template>
  <div class="container">
    <!-- TODO 和 NOTE 部分 -->
    <div class="box">
      <SwitchComp
        :settingItem="sidebar.setting.isPlayAudio"
        @toggle-state="toggleState($event)"
      ></SwitchComp>
    </div>
    <hr />
    <!-- 番茄钟部分 -->
    <div class="box">
      <SwitchComp
        :settingItem="sidebar.setting.isAutoRest"
        @toggle-state="toggleState($event)"
      ></SwitchComp>
      <NumInput
        :settingItem="sidebar.setting.workTomato"
        @change-num="changeTime($event)"
      ></NumInput>
      <NumInput
        :settingItem="sidebar.setting.restTomato"
        @change-num="changeTime($event)"
      ></NumInput>
    </div>
    <hr />
    <!-- 白噪声部分 -->
    <div class="box">
      <SwitchComp
        :settingItem="sidebar.setting.keepPlay"
        @toggle-state="toggleState($event)"
      ></SwitchComp>
      <RadioComp
        :settingItem="sidebar.setting.whiteNoise"
        @change-pick="changeDefaultWN($event)"
      ></RadioComp>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

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

  computed: {
    ...mapState(['sidebar']),
  },

  methods: {
    ...mapMutations(['modifySetting']),
    // 开关按钮
    toggleState(e) {
      this.modifySetting({ name: e.name, item: 'state', value: e.state });
    },
    // 改变番茄钟时间
    changeTime(e) {
      this.modifySetting({ name: e.name, item: 'time', value: e.time });
    },
    // 改变默认白噪声
    changeDefaultWN(e) {
      this.modifySetting({ name: e.name, item: 'defaultSelect', value: e.default });
    },
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
