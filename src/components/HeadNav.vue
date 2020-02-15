<template>
  <div class="nav-box">
    <span
    :class="isTodo ? 'active nav' : 'nav'"
    @mousedown="toTodo"
    >Todo</span>
    <span
    :class="isTodo ? 'nav' : 'active nav'"
    @mousedown="toNote"
    >Note</span>
  </div>
</template>

<script>
export default {
  name: 'HeadNav',

  data() {
    return {
      isTodo: true,
    };
  },

  methods: {
    toNote() {
      this.isTodo = false;
      this.$router.replace('/note');
    },
    toTodo() {
      this.isTodo = true;
      this.$router.replace('/');
    },
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

    &:hover {
      text-shadow: 0px 5px 10px $cl-shallow1;
    }

    &.active {
      color: $cl-main1;
    }
  }
}
</style>
