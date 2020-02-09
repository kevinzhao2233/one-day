import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';
import Tomato from '@/components/Tomato.vue';
import Statistic from '@/components/Statistic.vue';
import Login from '@/components/Login.vue';
import Notdefine from '@/components/NotDefine.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        home: Home,
      },
    },
    {
      path: '/tomato',
      name: 'Tomato',
      components: {
        header: Header,
        tomato: Tomato,
      },
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        header: Header,
        login: Login,
      },
    },
    {
      path: '/statistic',
      name: 'Statistic',
      components: {
        header: Header,
        statistic: Statistic,
      },
    },
    {
      path: '*',
      name: 'NotDefine',
      components: Notdefine,
    },
  ],
});
