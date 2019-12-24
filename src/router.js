import Items from './views/Items';
import Boxes from './views/Boxes';
import Files from './views/Files';
import Events from './views/Events';
import Error from './views/Error';
import VueRouter from 'vue-router';
import Vue from 'vue';



Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/36C3/items' },
  { path: '/howto', component: Error},
  { path: '/admin/files', name: 'files', component: Files},
  { path: '/admin/events', name: 'events', component: Events},
  { path: '/:event/boxes', name: 'boxes', component: Boxes},
  { path: '/:event/items', name: 'items', component: Items},
  { path: '/:event/box/:uid', name: 'boxes', component: Boxes},
  { path: '/:event/item/:uid', name: 'items', component: Items},
  { path: '*', component: Error},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;