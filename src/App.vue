<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="home"/>
    <router-view name="tomato"/>
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
.c-edition {
  width: 1026px;
  margin: 0 auto;
}

.ctrl-box {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
}

.small-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
