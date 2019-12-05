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
    loadedItems: Array,
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