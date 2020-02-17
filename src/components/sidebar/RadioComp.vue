<template>
  <div class="s-container">
    <p class="tit">{{ settingItem.tit }}</p>
    <label class="radios-label bui-radios-anim" v-for="item in settingItem.items" :key="item.name">
      <input type="radio" :name="settingItem.name" :value="item.name" v-model="picked" />
      <i class="bui-radios"></i>
      {{ item.tit }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioComp',
  data() {
    return {
      picked: this.settingItem.defaultSelect,
    };
  },
  props: {
    // {name: String, tit: String, defaultSelect: Strng, items: Array}
    settingItem: {
      type: Object,
      required: true,
    },
  },
  methods: {},
  watch: {
    picked() {
      this.$emit('change-pick', { name: this.settingItem.name, default: this.picked });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

.s-container {
  padding: 10px 0;

  .tit {
    margin: 0 0 12px 0;
  }
}

.radios-label {
  display: inline-block;
  position: relative;
  margin: 5px 18px;
  padding: 2px 0;
  font-size: 16px;
  -webkie-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  .bui-radios {
    display: inline-block;
    position: relative;
    width: 18px;
    height: 18px;
    background: #ffffff;
    border: 1px solid #979797;
    border-radius: 50%;
    vertical-align: -3px;
  }

  input:checked + .bui-radios {
    background: $cl-main1;
    border: 1px solid $cl-main1;
  }
}

.bui-radios-anim .bui-radios {
  -webkit-transition: background-color ease-out 0.3s;
  transition: background-color ease-out 0.3s;
}
</style>
