<template>
<div class="header">
  <div class="left-con">
    <router-link :to="{ name:'Home' }" class="link">
      <i class="home fa fa-home"></i>
    </router-link>
    <!-- TODO: 这里需要一个 logo -->
  </div>
  <div class="right-con">
    <router-link class="link" :to="{ name: 'Statistic' }">
      <i class="icon fa fa-area-chart"></i>
    </router-link>
    <router-link class="link" :to="{ name: 'Login' }">
      <i class="icon fa fa-user-o"></i>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import '../assets/lib/scss/config.scss';

.header {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 64px;
  box-shadow: 0 4px 12px $cl-aux3;

  .left-con {
    .link {
      display: flex;
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
    display: flex;
    align-items: center;
    height: 100%;

    .link {
      display: flex;
      align-items: center;
      width: 36px;
      height: 100%;
      margin: 0 16px;
      cursor: pointer;

      &:hover {
        margin-top: 4px;
        border-bottom: 4px solid $cl-main1;
      }

      .icon {
        display: block;
        width: 36px;
        height: 46px;
        font-size: 20px;
        text-align: center;
        line-height: 42px;
        color: $cl-main1;
      }
    }
  }
}
</style>
