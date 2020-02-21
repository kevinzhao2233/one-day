<template>
  <div class="s-container">
    <span class="s-tit">{{ settingItem.tit }}</span>
    <div class="s-input">
      <div @mousedown="inputChange('dec')" class="ctrl">
        <i class="icon">-</i>
      </div>
      <input class="input" :value="this.time" @input="inputChange" type="number" />
      <div @mousedown="inputChange('inc')" class="ctrl">
        <i class="icon">+</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumInput',

  props: {
    // {name: String, tit: String, time: Number}
    settingItem: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      time: this.settingItem.time,
    };
  },

  methods: {
    inputChange(params) {
      if (params === 'dec' && this.time > 1) {
        this.time -= 1;
      } else if (params === 'inc' && this.time < 120) {
        this.time += 1;
      } else if (params.target.value > 0 && params.target.value < 121) {
        this.time = Math.floor(params.target.value);
      }
      this.$emit('change-num', { name: this.settingItem.name, time: this.time });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.s-container {
  display: flex;
  align-items: center;
  padding: 10px 0;

  .s-tit {
    display: inline-block;
    flex: 1;
    -webkie-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .s-input {
    flex: 0 0 1;
    display: flex;
    border: 1px solid $cl-main1;
    border-radius: 4px;

    .ctrl {
      width: 36px;
      height: 30px;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: $cl-main1;

        .icon {
          color: $cl-aux1;
        }
      }

      .icon {
        font-size: 30px;
        color: $cl-font1;
        line-height: 24px;
        user-select: none;
      }
    }

    .input {
      width: 50px;
      height: 30px;
      border: 0;
      border-left: 1px solid $cl-main1;
      border-right: 1px solid $cl-main1;
      text-align: center;
      font-size: 16px;
    }
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
