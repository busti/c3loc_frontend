import Items from './views/Items';
import VueRouter from 'vue-router';
import Vue from 'vue';



Vue.use(VueRouter);

const routes = [
  { path: '/:event', component: Items},
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;