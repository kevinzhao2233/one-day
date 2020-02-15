import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Note from '@/pages/Note.vue';
import Tomato from '@/pages/Tomato.vue';
import Notdefine from '@/pages/NotDefine.vue';
import Header from '@/components/Header.vue';
import HeadNav from '@/components/HeadNav.vue';
import Sidebar from '@/components/Sidebar.vue';

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
        sidebar: Sidebar,
      },
    },
    // 番茄钟
    {
      path: '/tomato',
      name: 'Tomato',
      components: {
        header: Header,
        tomato: Tomato,
        sidebar: Sidebar,
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
        sidebar: Sidebar,
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
        sidebar: Sidebar,
      },
    },
    // 服务协议
    {
      path: '/agreement',
      name: 'Agreement',
      components: {
        header: Header,
        agreement: Agreement,
        sidebar: Sidebar,
      },
    },
    // 统计
    {
      path: '/user',
      name: 'User',
      components: {
        header: Header,
        user: User,
        sidebar: Sidebar,
      },
    },
    {
      path: '*',
      name: 'NotDefine',
      components: Notdefine,
    },
  ],
});
