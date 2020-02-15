import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Header from '@/components/Header.vue';
import HeadNav from '@/components/HeadNav.vue';
import Note from '@/pages/Note.vue';
import Tomato from '@/pages/Tomato.vue';
import Notdefine from '@/pages/NotDefine.vue';

const User = () => import('@/pages/User.vue');
const Login = () => import('@/pages/Login.vue');
const About = () => import('@/pages/About.vue');
const Agreement = () => import('@/pages/Agreement.vue');

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
    // 番茄钟
    {
      path: '/tomato',
      name: 'Tomato',
      components: {
        header: Header,
        tomato: Tomato,
      },
    },
    // 笔记随笔
    {
      path: '/note',
      name: 'Note',
      components: {
        header: Header,
        headNav: HeadNav,
        note: Note,
      },
    },
    // 登录
    {
      path: '/login',
      name: 'Login',
      components: {
        login: Login,
      },
    },
    // 关于我们
    {
      path: '/about',
      name: 'About',
      components: {
        header: Header,
        about: About,
      },
    },
    // 服务协议
    {
      path: '/agreement',
      name: 'Agreement',
      components: {
        header: Header,
        agreement: Agreement,
      },
    },
    // 统计
    {
      path: '/user',
      name: 'User',
      components: {
        header: Header,
        user: User,
      },
    },
    {
      path: '*',
      name: 'NotDefine',
      components: Notdefine,
    },
  ],
});
