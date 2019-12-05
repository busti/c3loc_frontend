import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
//import * as _ from 'lodash/fp';
import router from '../router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    events: Array,
    layout: 'cards',
    loadedItems: [
      { uid: 1, description: 'sleeping bag', box: 7, image: 41 },
      { uid: 2, description: 'tent', box: 7, image: 23 },
      { uid: 3, description: 'chest', box: 7, image: 52 },
      { uid: 4, description: 'power supply black', box: 5, image: 62 },
      { uid: 5, description: 'pullover yellow "pesthörnchen"', box: 5, image: 84 },
      { uid: 6, description: '"blue black second skin"', box: 6, image: 72 },
      { uid: 7, description: '"the bike blog" bottle orange', box: 6, image: 83 },
      { uid: 8, description: 'tshirt guad3c', box: 6, image: 26 },
      { uid: 9, description: 'power supply dell', box: 6, image: 74 },
      { uid: 10, description: 'blanket green blue', box: 6, image: 25 },
      { uid: 11, description: 'cap "ega"', box: 6, image: 71 },
      { uid: 12, description: 'water bottle blue "sistema"', box: 3, image: 12 },
      { uid: 13, description: 'sun hat black', box: 5, image: 1 },
      { uid: 14, description: 'toy truck', box: 6, image: 51 }
    ]
  },
  getters: {
    getEventSlug: state => state.route.params.event,
  },
  mutations: {
    replaceEvents(state, events) {
      state.events = events;
      //if (!state.activeEvent || !events.includes(state.activeEvent))
      //  state.activeEvent = _.reverse(events)[0];
    },
    changeEvent(state, event) {
      router.push({path: `/${event.slug}`});
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
        auth: {
          username: process.env.VUE_APP_CONFIG_API_USER,
          password: process.env.VUE_APP_CONFIG_API_PASSWORD
        }
      });

      commit('replaceEvents', resp.data);
    },
    changeEvent({ commit, dispatch }, eventName) {
      commit('changeEvent', eventName);
      dispatch('loadEventItems', eventName);
    },
    async loadEventItems({ commit, state }) {
      const resp = await axios.get(`https://c3lf.de/api/1/${state.route.params.event}/items`,  {
        auth: {
          username: process.env.VUE_APP_CONFIG_API_USER,
          password: process.env.VUE_APP_CONFIG_API_PASSWORD
        }
      });

      console.log(resp.data);

      commit('replaceLoadedItems', resp.data);
    }
  }
});

export default store;

store.dispatch('loadEvents');