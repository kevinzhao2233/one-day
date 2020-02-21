import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import Note from '@/pages/Note.vue';
import Tomato from '@/pages/Tomato.vue';
import Music from '@/pages/Music.vue';
import Notdefine from '@/pages/NotDefine.vue';
import Header from '@/components/header/Header.vue';
import HeadNav from '@/components/header/HeadNav.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';

const User = () => import('@/pages/User.vue');
const Login = () => import('@/pages/Login.vue');
const About = () => import('@/pages/About.vue');
const Agreement = () => import('@/pages/Agreement.vue');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: Header,
      headNav: HeadNav,
      home: Home,
      sidebar: Sidebar,
    },
    meta: {
      title: '首页 - One Day',
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
    meta: {
      title: '轻笔记 - One Day',
    },
  },
  // 音乐 - One Day
  {
    path: '/music',
    name: 'Music',
    components: {
      header: Header,
      headNav: HeadNav,
      music: Music,
      sidebar: Sidebar,
    },
    meta: {
      title: '音乐 | 白噪声 - One Day',
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
    meta: {
      title: '番茄钟 - One Day',
    },
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    components: {
      login: Login,
    },
    meta: {
      title: '登录 - One Day',
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
    meta: {
      title: '关于我们 - One Day',
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
    meta: {
      title: '服务协议 - One Day',
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
    meta: {
      title: '我的 - One Day',
    },
  },
  {
    path: '*',
    name: 'NotDefine',
    components: Notdefine,
    meta: {
      title: '网页走丢了 - One Day',
    },
  },
];

const router = new Router({
  routes,
});

router.afterEach((to) => {
  // 若取不到meta，就到 to.matched[0].meta.title
  document.title = to.meta.title;
});

export default router;
