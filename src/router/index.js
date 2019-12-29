import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Header from '@/components/Header';

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
  ],
});
