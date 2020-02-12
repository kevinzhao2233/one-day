<template>
  <div class="content c-edition">
    <div class="img-bg"></div>
    <div class="time-box">
      <span class="time">{{ formatMin }}:{{ formatSec }}</span>
      <div class="control-box">
        <i
          class="btn fa fa-play"
          v-show="time.status === 1 || time.status === 3"
          @click="handleStart"
        ></i>
        <i class="btn fa fa-pause" v-show="time.status === 2" @click="handleStop"></i>
        <i class="btn fa fa-undo" v-show="time.status === 3" @click="handleRestart"></i>
        <i class="btn fa fa-forward" v-show="time.status === 4" @click="handleJump"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Tomato',

  computed: {
    ...mapState(['time']),

    ...mapGetters(['formatMin', 'formatSec']),
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
@import "../assets/lib/scss/config.scss";

.content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  width: 100%;
  height: 420px;
  background-color: $cl-aux5;

  .img-bg {
    width: 90%;
    height: 90%;
    background: center / contain no-repeat url("../assets/img/irregularity-1.svg"),
      center / contain no-repeat url("../assets/img/irregularity-2.svg"),
      center / contain no-repeat url("../assets/img/irregularity-3.svg");
  }

  .time-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: $cl-aux1;

    .time {
      // margin-top: 160px;
      color: $cl-main1;
      font-size: 66px;
      line-height: 110px;
    }

    .control-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 60%;
      height: 42px;

      .btn {
        display: block;
        width: 42px;
        height: 42px;
        border-radius: 12px;
        border: 2px solid $cl-main1;
        text-align: center;
        line-height: 38px;
        color: $cl-main1;
        font-size: 20px;
        -webkit-user-select: none; /*webkit浏览器*/
        -moz-user-select: none; /*火狐*/
        -ms-user-select: none; /*IE10*/
        user-select: none;
        cursor: pointer;
      }
    }
  }
}
</style>
