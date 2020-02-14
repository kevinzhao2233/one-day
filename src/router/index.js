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
const About = () => import('@/components/About.vue');
const Agreement = () => import('@/components/Agreement.vue');

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
        login: Login,
      },
    },
    {
      path: '/about',
      name: 'About',
      components: {
        header: Header,
        about: About,
      },
    },
    {
      path: '/agreement',
      name: 'Agreement',
      components: {
        header: Header,
        agreement: Agreement,
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
