<template>
  <div class="box" v-show="isShow">
    <div class="s-box s-big">
      <div class="img-box" @click="switchRouter('User')">
        <img src="@/assets/img/profile.jpg" class="img" alt="头像" srcset="" />
      </div>
      <span class="tit"  @click="switchRouter('User')">{{ account.name }}</span>
      <span class="subtit">{{ account.accountNum }}</span>
      <div class="exit-box" @click="switchRouter('Login')">
        <span class="tit">退出登录</span>
      </div>
    </div>
    <div class="s-box s-small" id="_showSidebar" @click="openSetting">设置</div>
    <div class="s-box s-small" @click="switchRouter('Agreement')">使用协议</div>
    <div class="s-box s-small" @click="switchRouter('About')">关于我们</div>
  </div>
</template>

<script>
export default {
  name: 'OptBox',

  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      account: {
        profile: '@/assets/img/profile.jpg',
        name: '游客',
        accountNum: '登录功能仅供演示',
      },
    };
  },

  methods: {
    // 切换路由
    switchRouter(target) {
      this.notShowThisComp();
      this.$router.push({ name: target });
    },

    // 打开设置侧边栏
    openSetting() {
      this.notShowThisComp();
      this.$emit('open-sidebar', true);
    },

    // 不显示这个组件
    notShowThisComp() {
      this.$emit('not-show', false);
    },
  },

  mounted() {
    // 点击选框之外的地方，收起选框
    document.addEventListener('mousedown', (e) => {
      if (
        !this.$el.contains(e.target)
        && Array.from(e.target.classList).indexOf('_show-opt-box') < 0
      ) {
        this.showThisConp = false;
        // 如果点击的target不是这个组件，就收起来
        this.notShowThisComp();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";
@import "@/assets/lib/scss/mixins.scss";

.box {
  padding: 12px 0;
  width: 200px;
  border-radius: 8px;
  border: 1px solid $cl-aux2;
  background-color: $cl-aux1;
  box-shadow: -4px 8px 12px $cl-aux3;
  transition: all 0.3s ease-out;
  z-index: 500;

  .s-box {
    padding: 8px 12px;

    &.s-big {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 12px 0 24px 0;
      margin-bottom: 8px;
      border-bottom: 1px solid $cl-aux4;

      .img-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 68px;
        height: 68px;
        border-radius: 100px;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
          transition: all 0.3s ease;

          &:hover {
            width: 105%;
            height: 105%;
          }
        }
      }

      .tit {
        padding: 8px 0;
      }

      .subtit {
        color: $cl-font3;
        font-size: 14px;
      }

      .exit-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 12px 0 2px 0;
        width: 100px;
        height: 32px;
        border: 1px solid $cl-main1;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #ff4e893a;
        }

        .tit {
          color: $cl-main1;
          line-height: 0;
        }
      }
    }

    &.s-small {
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: $cl-aux2;
      }
    }
  }
}
</style>
