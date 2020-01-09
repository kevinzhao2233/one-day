<template>
<div class="header">
  <div class="left-con">
    logo
  </div>
  <div class="right-con">
    <router-link class="link" to="/statistic"></router-link>
    <router-link class="link" to="/login"></router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 64px;
  box-shadow: 0 4px 12px #efeffe;

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
