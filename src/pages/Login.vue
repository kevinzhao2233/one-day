<template>
  <div class="bg">

    <div class="login-box">
      <div class="title">
        <span :class="!isSignup ? 'tit select active' : 'tit select'" @click="changeToLogin()">{{
          msg.login
        }}</span>
        <span class="tit gap">/</span>
        <span :class="isSignup ? 'tit select active' : 'tit select'" @click="changeToSignup()">{{
          msg.signup
        }}</span>
      </div>
      <div class="login">
        <form class="login-form">
          <transition-group
            name="flip-list"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <InputBox
              :key="1"
              :inputTitle="msg.email"
              :loginData="loginData.email"
              :inputType="inputType.text"
            />
            <InputBox
              :key="2"
              v-if="isSignup"
              :inputTitle="msg.username"
              :loginData="loginData.username"
              :inputType="inputType.text"
            />
            <InputBox
              :key="3"
              :inputTitle="msg.password"
              :loginData="loginData.password"
              :inputType="inputType.password"
            />
            <InputBox
              :key="4"
              v-if="isSignup"
              :inputTitle="msg.rewPassword"
              :loginData="loginData.rewPassword"
              :inputType="inputType.password"
            />
          </transition-group>
          <a href="" class="forget">{{ msg.forget }}</a>
          <span class="temp-sec">登录功能仅供演示，此APP暂时只有前端部分</span>
          <input class="sub-btn" @click="loginSubmit" type="button" value="登录" />
        </form>
      </div>
    </div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import Visual from '@/assets/lib/js/canvasAni';
import InputBox from '../components/InputBox.vue';

export default {
  name: 'Login',
  components: {
    InputBox,
  },
  data() {
    return {
      isSignup: false,
      loginData: {
        email: '',
        password: '',
        username: '',
        rewPassword: '',
      },
      inputType: {
        email: 'email',
        text: 'text',
        password: 'password',
        number: 'number',
      },
      msg: {
        login: '登录',
        email: '邮箱',
        username: '用户名',
        password: '密码',
        rewPassword: '确认密码',
        signup: '注册',
        forget: '忘记密码？',
      },
    };
  },

  methods: {
    handleFocus(value) {
      this[value] = true;
    },
    handleBlur(isFocused, data) {
      if (this.loginData[data] === '') {
        this[isFocused] = false;
      }
    },
    changeToLogin() {
      this.isSignup = false;
    },
    changeToSignup() {
      this.isSignup = true;
    },
    loginSubmit() {
      this.$router.push({ name: 'Home' });
    },
    signupSubmit() {
      this.$router.push({ name: 'Home' });
    },
  },

  mounted() {
    /* eslint-disable no-new */
    new Visual();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/lib/scss/config.scss";

// 覆盖默认时间
.animated {
  animation-duration: 0.5s;
}

.flip-list-move {
  transition: all 0.5s;
}

.temp-sec {
  margin-top: 12px;
  color: $cl-main1;
  font-size: 13px;
  text-align: center;
}

.bg {
  position: relative;
  width: 100%;
  height: calc(100vh - 54px);

  #canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  .login-box {
    position: absolute;
    margin: 10% auto 20% auto;
    left: 50%;
    transform: translateX(-150px);
    padding: 40px 0;
    width: 300px;
    border-radius: 12px;
    background-color: $cl-aux1;
    box-shadow: 0 12px 40px -10px $cl-shallow1;

    .title {
      width: 100%;
      text-align: center;

      .tit {
        font-size: 20px;
        color: $cl-font3;
        line-height: 80px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &.select {
          cursor: pointer;
        }

        &.active {
          color: $cl-main1;
        }

        &.gap {
          margin: 0 8px;
        }
      }
    }

    .login {
      padding: 0 40px;
      width: 100%;

      .login-form {
        display: flex;
        flex-direction: column;
        width: 100%;

        .forget {
          display: inline-block;
          margin-top: 36px;
          width: 5em;
          font-size: 14px;
          color: $cl-font4;

          &:visited {
            color: $cl-font4;
          }
          &:hover {
            color: $cl-font2;
          }
        }

        .sub-btn {
          margin-top: 40px;
          width: 100%;
          height: 46px;
          border: none;
          border-radius: 100px;
          background: linear-gradient(-120deg, $cl-main1, $cl-shallow1);
          box-shadow: 0 12px 24px -14px $cl-main1;
          font-size: 16px;
          color: $cl-aux1;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
