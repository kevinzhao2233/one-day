<template>
  <div class="header">
    <div class="left-con">
      <router-link :to="{ name: 'Home' }" class="link">
        <i class="home fa fa-home"></i>
      </router-link>
      <!-- TODO: 这里需要一个 logo -->
    </div>
    <div class="right-con">
      <router-link class="link" :to="{ name: 'Statistic' }">
        <i class="icon fa fa-area-chart"></i>
      </router-link>
      <div class="link _show-opt-box" @mousedown="toggleOptBox">
        <i class="icon _show-opt-box fa fa-user-o"></i>
        <i class="icon icon-t _show-opt-box fa fa-angle-down"></i>
      </div>
      <OptBox class="opt-box" @not-show="notShow($event)" :isShow="isShowOptBox"></OptBox>
    </div>
  </div>
</template>

<script>
import OptBox from './widget/OptBox.vue';

export default {
  name: 'Header',
  components: {
    OptBox,
  },
  data() {
    return {
      isShowOptBox: false,
    };
  },
  methods: {
    toggleOptBox() {
      this.isShowOptBox = !this.isShowOptBox;
    },
    notShow(e) {
      this.isShowOptBox = e;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/lib/scss/config.scss";
@import "../assets/lib/scss/mixins.scss";

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  width: 100%;
  height: 54px;
  box-shadow: 0 4px 12px $cl-aux3;

  @include respond-to(lg) {
    padding: 0 24px;
  }

  .left-con {
    .link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 100%;

      .home {
        color: $cl-main1;
        font-size: 24px;
      }
    }
  }

  .right-con {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;

    .link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      margin: 0 2px;
      height: 100%;
      margin-top: 4px;
      border-bottom: 4px solid transparent;
      transition: all 0.2s ease;
      cursor: pointer;

      &:hover {
        border-bottom: 4px solid $cl-main1;
        background-color: $cl-aux1;
      }

      @include respond-to(lg) {
        margin: 0 10px;
      }

      .icon {
        display: block;
        margin: 0 4px;
        height: 46px;
        font-size: 20px;
        text-align: center;
        line-height: 42px;
        color: $cl-main1;

        &.icon-t {
          width: auto;
        }
      }
    }

    .opt-box {
      position: absolute;
      top: 54px;
      right: 10px;
    }
  }
}
</style>
