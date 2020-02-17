<template>
  <div class="nav-box">
    <span :class="currNav === 'Home' ? 'active nav' : 'nav'" @mousedown="toPage('Home')">待办</span>
    <span :class="currNav === 'Note' ? 'active nav' : 'nav'" @mousedown="toPage('Note')">便签</span>
    <span :class="currNav === 'Music' ? 'active nav' : 'nav'" @mousedown="toPage('Music')">音乐</span
    >
  </div>
</template>

<script>
export default {
  name: 'HeadNav',

  data() {
    return {
      currNav: '',
    };
  },

  methods: {
    // 切换路由
    toPage(page) {
      if (this.$route.name !== page) {
        this.$router.replace({ name: page });
        this.currNav = page;
      }
    },
  },

  watch: {
    // 监听路由变化，改变样式
    $route(to) {
      this.currNav = to.name;
    },
  },

  mounted() {
    // 初始化
    this.currNav = this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.nav-box {
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav {
    margin: 0 30px;
    font-weight: bold;
    font-size: 20px;
    color: $cl-font3;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    user-select: none;

    &:hover {
      text-shadow: 0px 5px 10px $cl-shallow1;
    }

    &.active {
      color: $cl-main1;
    }
  }
}
</style>
