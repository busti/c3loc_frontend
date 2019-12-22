import Vue from 'vue';
import Vuex from 'vuex';
import AxiosBootstrap from 'axios';
import config from '../config';
//import * as _ from 'lodash/fp';
import router from '../router';

Vue.use(Vuex);
const axios = AxiosBootstrap.create({
  baseURL: config.service.url,
  auth: config.service.auth
});

axios.interceptors.response.use(response => response, error => {
  console.error(error); // todo: toast error
  return Promise.reject(error);
});

const store = new Vuex.Store({
  state: {
    events: [],
    layout: 'cards',
    loadedItems: [],
    loadedBoxes: [],
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
    updateItem(state, updatedItem) {
      const item = state.loadedItems.filter(({ item_uid }) => item_uid === updatedItem.item_uid)[0];
      Object.assign(item, updatedItem);
    },
    appendItem(state, item) {
      state.loadedItems.push(item);
    }
  },
  actions: {
    async loadEvents({ commit }) {
      const { data } = await axios.get('/1/events');
      commit('replaceEvents', data);
    },
    changeEvent({ dispatch, getters}, eventName) {
      router.push({path: `/${eventName.slug}/${getters.getActiveView}`});
      dispatch('loadEventItems', eventName);
    },
    changeView({ getters }, link) {
      router.push({path: `/${getters.getEventSlug}/${link.path}`});
    },
    showBoxContent({ getters }, box) {
      router.push({path: `/${getters.getEventSlug}/items`, query: {box}});
    },
    async loadEventItems({ commit, getters }) {
      const { data } = await axios.get(`/1/${getters.getEventSlug}/items`);
      commit('replaceLoadedItems', data);
    },
    async loadBoxes({ commit }) {
      const { data } = await axios.get('/1/boxes');
      commit('replaceBoxes', data);
    },
    async updateItem({ commit, getters }, item) {
      const { data } = await axios.put(`/1/${getters.getEventSlug}/item/${item.iid}`, item);
      commit('updateItem', data);
    },
    async postItem({ commit, getters }, item) {
      console.log('Image data URL is at', item.dataImage); // todo: use image data URI in the request somehow
      const { data } = await axios.post(`/1/${getters.getEventSlug}/item`, item);
      console.log(data); // todo: maybe preprocess item data?
      commit('appendItem', data);
    }
  }
});

export default store;

store.dispatch('loadEvents').then(() =>{
  store.dispatch('loadEventItems');
  store.dispatch('loadBoxes');
}
);
