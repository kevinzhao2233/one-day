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
      <div class="control-box">
        <i class="btn" v-show="time.status === 1 || time.status === 3" @click="handleStart">a</i>
        <i class="btn" v-show="time.status === 2" @click="handleStop">s</i>
        <i class="btn" v-show="time.status === 3" @click="handleRestart">r</i>
        <i class="btn" v-show="time.status === 4" @click="handleJump">j</i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Tomato',

  computed: {
    ...mapState([
      'time',
    ]),

    ...mapGetters([
      'formatMin',
      'formatSec',
    ]),
  },

  methods: {
    handleStart() {
      this.$store.dispatch({
        type: 'startTime',
      });
    },
    handleStop() {
      this.$store.dispatch({
        type: 'stopTime',
      });
    },
    handleRestart() {
      this.$store.dispatch({
        type: 'restartTime',
      });
    },
    handleJump() {
      this.$store.dispatch({
        type: 'jumpTime',
      });
    },
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
      line-height: 90px;
    }

    .control-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      height: 40px;

      .btn {
        display: block;
        width: 30%;
        height: 100%;
        background-color: #ffcfde;
        text-align: center;
        line-height: 40px;
        -webkit-user-select:none; /*webkit浏览器*/
        -moz-user-select:none; /*火狐*/
        -ms-user-select:none; /*IE10*/
        user-select:none;
      }
    }
  }
}
</style>
