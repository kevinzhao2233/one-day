// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'animate.css';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store/index';
import './assets/lib/common.css';
import './assets/lib/global.css';

// 全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
