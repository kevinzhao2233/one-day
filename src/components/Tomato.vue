<template>
  <div class="content c-edition">
    <svg xmlns="http://www.w3.org/2000/svg" class="svg"  style="vector-effect: non-scaling-stroke;" stroke="null">
      <g stroke="null">
        <path
          stroke="#ffffff"
          id="svg_8"
          d="m308.333438,54.980105c141.99872,-14.85511 262.6643,
          199.09073 207.99812,295.75185c-54.66618,96.66112 -311.99718,
          100.36962 -379.32991,8.77801c-67.33273,-91.59161 29.33307,
          -289.67475 171.33179,-304.52986z"
          stroke-width="0"
          fill="#ffb5cd"
        />
      </g>
    </svg>
    <div class="time-box">
      <span class="time">{{formatMin}}:{{formatSec}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Tomato',

  computed: {
    ...mapGetters([
      'formatMin',
      'formatSec',
    ]),
  },

  mounted() {
    this.$store.dispatch({
      type: 'decreaseTimeAsync',
    });
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 720px;
  height: 840px;
  background-color: #eef;

  .svg {
    margin: 0;
    width: 640px;
    height: 500px;
  }

  .time-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-color: #fff;

    .time {
      // margin-top: 160px;
      color: #ff5b8f;
      font-size: 66px;
    }
  }
}
</style>
