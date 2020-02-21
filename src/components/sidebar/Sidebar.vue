<template>
  <transition
    name="sldebar"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
    <div class="container" v-show="this.sidebar.isShowSidebar">
      <Setting></Setting>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Setting from '@/components/sidebar/Setting.vue';

export default {
  name: 'Sidebar',
  components: {
    Setting,
  },
  computed: {
    ...mapState(['sidebar']),
  },
  methods: {
    ...mapMutations(['toggleShowSidebar']),
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (
        !this.$el.contains(e.target)
        && e.target.id !== '_showSidebar'
      ) {
        this.toggleShowSidebar(false);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";
// @import "../assets/lib/scss/mixins.scss";

// 覆盖默认动画时间
.animated {
  animation-duration: 0.3s;
}

.container {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 24px 12px;
  width: 300px;
  height: calc(100vh - 54px);
  background-color: $cl-aux5;
  box-shadow: -4px 6px 12px $cl-aux3;
  z-index: 200;
}
</style>
