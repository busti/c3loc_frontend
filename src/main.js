import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';

// bootstrap
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCheckCircle, faEdit, faTrash, faCat, faSyncAlt, faSort, faSortUp, faSortDown, faTh, faList, faWindowClose, faCamera, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faCheckCircle, faEdit, faTrash, faCat, faSyncAlt, faSort, faSortUp, faSortDown, faTh, faList, faWindowClose, faCamera, faStop);

Vue.component('font-awesome-icon', FontAwesomeIcon);

sync(store, router);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
