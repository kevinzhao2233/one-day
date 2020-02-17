<template>
  <div class="p-box">
    <div class="empty"></div>
    <div class="content">
      <span class="msc-name">父亲写的散文诗</span>
      <span class="art-name">许飞</span>
      <div class="progress-box">
        <div class="time">
          <span>00:00</span>
          <span>03:00</span>
        </div>
        <div class="progress">
          <div class="pro total"></div>
          <div class="pro hover"></div>
          <div class="pro current"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'playerTrack',
  props: {
    isPlay: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.p-box {
  display: flex;
  width: 100%;
  height: 100%;

  .empty {
    flex: 3;
  }
  .content {
    flex: 4;
    display: flex;
    flex-direction: column;
    padding: 12px;

    .msc-name {
      font-weight: bold;
      font-size: 17px;
    }

    .art-name {
      margin: 6px 0 6px 0;
      font-size: 13px;
    }

    .time {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 13px;
      color: $cl-main1;
    }

    .progress {
      position: relative;
      width: 100%;
      height: 12px;
      line-height: 10px;
      background-color: #fff;
      cursor: pointer;

      .pro {
        position: absolute;
        margin-top: 3px;
        width: 100%;
        height: 4px;
        border-radius: 3px;

        &.total {
          background-color: $cl-shallow1;
        }

        &.hover {
          width: 60%;
          background-color: $cl-shallow1;
        }

        &.current {
          width: 20%;
          background-color: $cl-main1;
          box-shadow: 2px 0 2px $cl-main1;
        }
      }
    }
  }
}
</style>
