import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: ['35c3', 'camp19', '36c3'],
    activeEvent: '35c3'
  }
});
