<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="home"/>
    <router-view name="tomato"/>
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
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB",
  "Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
