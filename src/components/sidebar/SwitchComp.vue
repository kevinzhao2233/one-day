<template>
  <div class="s-container">
    <span class="s-tit">{{ settingItem.tit }}</span>
    <div :class="settingItem.state ? 'open s-switch' : 's-switch'" @mousedown="toggleState">
      <div class="s-part"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchComp',

  props: {
    settingItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    toggleState() {
      this.$emit('toggle-state', {
        name: this.settingItem.name,
        tit: this.settingItem.tit,
        state: !this.settingItem.state,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.s-container {
  display: flex;
  padding: 10px 0;

  .s-tit {
    display: inline-block;
    flex: 1;
  }

  .s-switch {
    flex: 0 0 1;
    padding: 1px;
    width: 48px;
    height: 24px;
    border-radius: 100px;
    border: 1px solid $cl-shallow1;
    background-color: $cl-aux2;
    transition: all 0.3s ease-in;
    cursor: pointer;

    &.open {
      border: 1px solid $cl-main1;
      background-color: $cl-main1;

      .s-part {
        transform: translateX(24px);
      }
    }

    .s-part {
      width: 20px;
      height: 20px;
      border-radius: 100px;
      background-color: $cl-aux1;
      transition: all 0.3s ease-in;
    }
  }
}
</style>
