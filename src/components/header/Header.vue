<template>
  <div class="header">
    <div class="left-con">
      <router-link :to="{ name: 'Home' }" class="link">
        <i class="home"></i>
      </router-link>
    </div>
    <div class="right-con">
      <a class="link" :href="feedback">
        <i class="icon fa fa-commenting-o"></i>
      </a>
      <div class="link _show-opt-box" @mousedown="toggleOptBox">
        <i class="icon _show-opt-box fa fa-user-o"></i>
        <i class="icon icon-t _show-opt-box fa fa-angle-down"></i>
      </div>
      <OptBox
        class="opt-box"
        @not-show="notShow($event)"
        @open-sidebar="toggleShowSidebar($event)"
        :isShow="isShowOptBox"
      ></OptBox>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import OptBox from './OptBox.vue';

export default {
  name: 'Header',
  components: {
    OptBox,
  },
  data() {
    return {
      isShowOptBox: false,
      feedback: 'https://github.com/kevinzhao2233/one-day/issues/new',
    };
  },
  methods: {
    ...mapMutations(['toggleShowSidebar']),

    toggleOptBox() {
      this.isShowOptBox = !this.isShowOptBox;
    },
    notShow(e) {
      this.isShowOptBox = e;
    },
  },
  created() {
    // 这里派发页面localStorage初始化
    this.$store.dispatch({
      type: 'loaclDataInit',
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";
@import "@/assets/lib/scss/mixins.scss";

.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  width: 100%;
  height: 54px;
  background-color: $cl-aux5;
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
        display: block;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/logo.png');
        background-size: 80%;
        background-position: center center;
        background-repeat: no-repeat;
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
      padding: 4px 10px 0 10px;
      margin: 0 2px;
      height: 100%;
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
      top: 58px;
      right: 0;
    }
  }
}
</style>
