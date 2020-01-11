<template>
<div class="header">
  <div class="left-con">
    logo
  </div>
  <div class="right-con">
    <router-link class="link" :to="{ name: 'Statistic' }"></router-link>
    <router-link class="link" :to="{ name: 'Login' }"></router-link>
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
  background-color: $cl-aux1;
  box-shadow: 0 4px 12px $cl-aux3;

  .right-con {
    display: flex;
    align-items: center;
    height: 100%;

    .link {
      width: 46px;
      height: 100%;
      background-color: #eee;
      margin: 0 8px;
      cursor: pointer;
    }
  }
}
</style>
