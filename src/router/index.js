import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Header from '@/components/Header';
import Tomato from '@/components/Tomato';
import Statistic from '@/components/Statistic';
import Login from '@/components/Login';
import Notdefine from '@/components/NotDefine';

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
