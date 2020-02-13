import Vue from 'vue';
import axios from 'axios';
import 'animate.css';
import 'font-awesome/scss/font-awesome.scss';
import TextareaAutosize from 'vue-textarea-autosize';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './assets/lib/common.css';
import './assets/lib/global.css';

// 全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(TextareaAutosize);

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
