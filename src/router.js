import Items from './views/Items';
import Boxes from './views/Boxes';
import Error from './views/Error';
import VueRouter from 'vue-router';
import Vue from 'vue';



Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/36C3/items' },
  { path: '/howto', component: Error},
  { path: '/:event/boxes', name: 'boxes', component: Boxes},
  { path: '/:event/items', name: 'items', component: Items},
  { path: '*', component: Error},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;