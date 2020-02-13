<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="headNav"/>
    <router-view name="home"/>
    <router-view name="tomato"/>
    <router-view name="note"/>
    <router-view name="login"/>
    <router-view name="statistic"/>
    <router-view name="notdefine"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/lib/scss/config.scss';

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
  "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  background-color: $cl-aux5;
}
</style>
