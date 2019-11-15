import Vue from 'vue';
import App from './App.vue';
import store from './store';

// bootstrap
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCheckCircle, faEdit, faTrash, faCat, faSyncAlt, faSort, faSortUp, faSortDown, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlus, faCheckCircle, faEdit, faTrash, faCat, faSyncAlt, faSort, faSortUp, faSortDown, faTh, faList);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
