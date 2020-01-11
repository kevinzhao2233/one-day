<template>
  <div class="login-box">
    <div class="title">
      <span class="tit select active">Login</span>
      <span class="tit">/</span>
      <span class="tit select">Sign Up</span>
    </div>
    <div class="login">
      <form class="login-form" >
        <div class="input-box">
          <span :class="isFocusedUsername ? 'descript active' : 'descript'">Username</span>
          <input @focus="handleFocus('isFocusedUsername')"
            @blur="handleBlur('isFocusedUsername', 'username')"
            v-model="loginData.username"
            class="input" type="text"
            name="username" id="username" autocomplete="off">
        </div>
        <div class="input-box">
          <span :class="isFocusedPassword ? 'descript active': 'descript'">Password</span>
          <input @focus="handleFocus('isFocusedPassword')"
            @blur="handleBlur('isFocusedPassword', 'password')"
            v-model="loginData.password"
            class="input" type="password"
            name="password" id="password" autocomplete="off">
        </div>
        <a href="" class="forget">Forget?</a>
        <input class="sub-btn" @click="submit" type="button" value="LOGIN">
      </form>
    </div>
    <div class="signup"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isFocusedUsername: false,
      isFocusedPassword: false,
      loginData: {
        username: '',
        password: '',
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
    submit() {
      this.$axios({
        method: 'get',
        url: 'https://www.easy-mock.com/mock/5dfb455f8b2a6e75d01746e0/example/temp', // 接口地址
        // data: {
        //   username: this.loginData.username,
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
      color: #bbb;
      line-height: 80px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &.select {
        cursor: pointer;
      }

      &.active {
        color: #ff81a9;
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

      .input-box {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin: 0;
        width: 100%;
        height: 80px;

        .descript {
          position: absolute;
          bottom: 0;
          font-size: 18px;
          color: #ff81a9;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          z-index: 10;
          transition: all .3s linear;

          &.active {
            bottom: 28px;
            font-size: 12px;
            transition: all .3s linear;
          }
        }

        .input {
          flex: 0 0 auto;
          width: 100%;
          height: 28px;
          border: none;
          border-bottom: 2px solid #bbb;
          letter-spacing: 1px;
          font-size: 14px;
          z-index: 20;
        }
      }

      .forget {
        display: inline-block;
        margin-top: 36px;
        width: 4em;
        font-size: 14px;
      }

      .sub-btn {
        margin-top: 40px;
        width: 100%;
        height: 46px;
        border: none;
        border-radius: 100px;
        background: linear-gradient(-120deg, $cl-main1, $cl-shallow1);
        box-shadow: 0 12px 12px -8px $cl-shallow1;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
