<template>
  <div id="app">
    <router-view name="header" />
    <router-view name="sidebar" />
    <router-view name="headNav" />
    <router-view name="home" />
    <router-view name="tomato" />
    <router-view name="note" />
    <router-view name="music" />
    <router-view name="login" />
    <router-view name="user" />
    <router-view name="about" />
    <router-view name="agreement" />
    <router-view name="notdefine" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./assets/lib/scss/config.scss";

#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans",
  Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  // font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
  //   "微软雅黑", Arial, sans-serif;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  background-color: $cl-aux5;
}
</style>
