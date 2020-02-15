<template>
  <div class="box">
    <router-link :to="{ name: 'Tomato' }" class="content-box">
      <span class="time">{{ formatMin }}:{{ formatSec }}</span>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SmallTomato',
  computed: {
    ...mapGetters(['formatMin', 'formatSec']),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;

  .content-box {
    display: block;
    width: 120px;
    height: 48px;
    border-radius: 100px;
    background-color: $cl-main1;
    text-align: center;
    box-shadow: 0 8px 24px -6px $cl-main1;

    .time {
      color: $cl-aux1;
      font-size: 26px;
      font-weight: 500;
      line-height: 48px;
      user-select: none;
    }
  }
}
</style>
