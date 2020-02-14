import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Header from '@/components/Header.vue';
import HeadNav from '@/components/widget/HeadNav.vue';
import Note from '@/components/Note.vue';
import Tomato from '@/components/Tomato.vue';
import Statistic from '@/components/Statistic.vue';
import Notdefine from '@/components/NotDefine.vue';

const Login = () => import('@/components/Login.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: Header,
        headNav: HeadNav,
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
      path: '/note',
      name: 'Note',
      components: {
        header: Header,
        headNav: HeadNav,
        note: Note,
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
