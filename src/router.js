import Items from './views/Items';
import Boxes from './views/Boxes';
import Error from './views/Error';
import VueRouter from 'vue-router';
import Vue from 'vue';



Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/items/36C3' },
  { path: '/boxes/:event', component: Boxes},
  { path: '/items/:event', component: Items},
  { path: '*', component: Error},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;