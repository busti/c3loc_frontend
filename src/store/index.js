import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import * as _ from 'lodash/fp';
import router from '../router';

import getAuth from './auth';

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    events: [],
    layout: 'cards',
    loadedItems: [],
    loadedBoxes: [],
    apiUrl: 'https://c3lf.de/api',
  },
  getters: {
    getEventSlug: state => state.route && state.route.params.event? state.route.params.event : state.events.length ? state.events[0].slug : '36C3',
    getActiveView: state => state.route.name || 'items',
    getFilters: state => state.route.query,
  },
  mutations: {
    replaceEvents(state, events) {
      state.events = events;
    },
    changeView(state, {view, slug}) {
      router.push({path: `/${slug}/${view}`});
    },
    replaceLoadedItems(state, newItems) {
      state.loadedItems = newItems.map(e => ({...e, uid: e.item_uid}));
    },
    setLayout(state, layout) {
      state.layout = layout;
    },
    replaceBoxes(state, loadedBoxes) {
      state.loadedBoxes = loadedBoxes;
    },
  },
  actions: {
    async loadEvents({ commit, state }) {
      const resp = await axios.get(`${state.apiUrl}/1/events`,  {
        auth: getAuth(),
      });

      commit('replaceEvents', resp.data);
    },
    changeEvent({ dispatch, getters}, eventName) {
      router.push({path: `/${eventName.slug}/${getters.getActiveView}`});
      dispatch('loadEventItems', eventName);
    },
    changeView({ getters }, link) {
      router.push({path: `/${getters.getEventSlug}/${link.path}`});
    },
    async loadEventItems({ commit, state, getters }) {
      const resp = await axios.get(`${state.apiUrl}/1/${getters.getEventSlug}/items`,  {
        auth: getAuth(),
      });

      commit('replaceLoadedItems', resp.data);
    },
    async loadBoxes({ commit, state }) {
      const resp = await axios.get(`${state.apiUrl}/1/boxes`,  {
        auth: getAuth(),
      });

      commit('replaceBoxes', resp.data);
    },
    async updateItem({ getters, state }, item) {
      axios.put(`${state.apiUrl}/1/${getters.getEventSlug}/item/${item.iid}`, item, {
        auth: getAuth(),
      });
    }
  }
});

export default store;

store.dispatch('loadEvents').then(() =>{
  store.dispatch('loadEventItems');
  store.dispatch('loadBoxes');
}
);
