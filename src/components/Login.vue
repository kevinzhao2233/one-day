<template>
  <div class="login-box">
    <div class="title">
      <span class="tit select active">{{ msg.login }}</span>
      <span class="tit">/</span>
      <span class="tit select">{{ msg.signup }}</span>
    </div>
    <div class="login">
      <form class="login-form" >
        <InputBox
          :inputTitle="msg.email"
          :loginData="loginData.email"
          :inputType="inputType.text"
        />
        <InputBox
          :inputTitle="msg.password"
          :loginData="loginData.password"
          :inputType="inputType.password"
        />
        <a href="" class="forget">{{ msg.forget }}</a>
        <input class="sub-btn" @click="loginSubmit" type="button" value="登录">
      </form>
    </div>
    <div class="signup">
    </div>
  </div>
</template>

<script>
import InputBox from './widget/InputBox';

export default {
  name: 'Login',
  components: {
    InputBox,
  },
  data() {
    return {
      isFocusedEmail: false,
      isFocusedPassword: false,
      loginData: {
        email: '',
        password: '',
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
        signup: '注册',
        forget: '忘记密码？',
      },
      temp: '123',
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
    loginSubmit() {
      this.$axios({
        method: 'post',
        url: 'https://www.easy-mock.com/mock/5dfb455f8b2a6e75d01746e0/example/login', // 接口地址
        // data: {
        //   email: this.loginData.email,
        //   password: this.loginData.password,
        // },
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response, 'success'); // 成功的返回
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error, 'error')); // 失败的返回
    },
    signupSubmit() {
      this.$axios({
        method: 'post',
        url: 'https://www.easy-mock.com/mock/5dfb455f8b2a6e75d01746e0/example/signup', // 接口地址
        // data: {
        //   email: this.loginData.email,
        //   password: this.loginData.password,
        // },
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response, 'success'); // 成功的返回
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error, 'error')); // 失败的返回
    },
  },
};
</script>

<style lang="scss">
@import '../assets/lib/scss/config.scss';

.login-box {
  margin: 10% auto;
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
        color: $cl-font2;
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
</style>
