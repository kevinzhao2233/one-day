<template>
  <div class="content">
    <h1>404</h1>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'NotDefine',
  data() {
    return {
      msg: '哈哈哈哈哈哈哈哈哈',
    };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  text-align: center;
}
h1 {
  margin: 100px 0 30px 0;
  font-size: 60px;
}
span {
  font-size: 20px;
  color: #777;
}
</style>
