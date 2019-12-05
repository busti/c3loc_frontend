import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import * as _ from 'lodash/fp';
import router from '../router';

import getAuth from './auth';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    events: Array,
    layout: 'cards',
    loadedItems: Array,
    currentview: 'items',
  },
  getters: {
    getEventSlug: state => state.route.params.event,
    getActiveView: state => state.currentview,
  },
  mutations: {
    replaceEvents(state, events) {
      state.events = events;
      //if (!state.activeEvent || !events.includes(state.activeEvent))
      //  state.activeEvent = _.reverse(events)[0];
    },
    changeEvent(state, event) {
      router.push({path: `/${state.currentview}/${event.slug}`});
    },
    changeView(state, link) {
      router.push({path: `/${link.path}/${state.route.params.event}`});
    },
    replaceLoadedItems(state, newItems) {
      state.loadedItems = newItems;
    },
    setLayout(state, layout) {
      state.layout = layout;
    }
  },
  actions: {
    async loadEvents({ commit }) {
      const resp = await axios.get('https://c3lf.de/api/1/events',  {
        auth: getAuth(),
      });

      commit('replaceEvents', resp.data);
    },
    changeEvent({ commit, dispatch }, eventName) {
      commit('changeEvent', eventName);
      dispatch('loadEventItems', eventName);
    },
    changeView({ commit }, link) {
      commit('changeView', link);
    },
    async loadEventItems({ commit, state }) {
      const resp = await axios.get(`https://c3lf.de/api/1/${state.route.params.event}/items`,  {
        auth: getAuth(),
      });

      console.log(resp.data);

      commit('replaceLoadedItems', resp.data);
    }
  }
});

export default store;

store.dispatch('loadEvents');
store.dispatch('loadEventItems');