<template>
  <div id="app">
    <router-view name="header"/>
    <router-view name="home"/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.c-edition {
  width: 1026px;
  margin: 0 auto;
}
</style>
