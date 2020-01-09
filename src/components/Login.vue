<template>
  <div class="login-box">
    <div class="title">
      <span class="tit select active">Login</span>
      <span class="tit">/</span>
      <span class="tit select">Sign Up</span>
    </div>
    <div class="login">
      <form class="login-form" action="login" method="post">
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
        <input class="sub-btn" type="submit" value="LOGIN">
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
  },

  mounted() {
    if (this.$router.params) {
      // eslint-disable-next-line no-console
      console.log(this.$router.params);
    } else {
      // eslint-disable-next-line no-console
      console.log('????');
    }
  },
};
</script>

<style lang="scss">
.login-box {
  width: 300px;

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
        background-color: #ffb5cd;
        font-size: 16px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
