import Vue from 'vue';
import App from './App.vue';
import store from './store';

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
