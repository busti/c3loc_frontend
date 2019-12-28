import Vue from 'vue';
import Vuex from 'vuex';
import AxiosBootstrap from 'axios';
import config from '../config';
//import * as _ from 'lodash/fp';
import router from '../router';

import * as base64 from 'base-64';
import * as utf8 from 'utf8';

Vue.use(Vuex);
const axios = AxiosBootstrap.create({
  baseURL: config.service.url,
  auth: config.service.auth
});

axios.interceptors.response.use(response => response, error => {
  console.log('error interceptor fired');
  console.error(error); // todo: toast error
  console.log(Object.entries(error));

  if (error.isAxiosError) {
    const message = `
      <h3>A HTTP ${error.config.method} request failed.</h3>
      <p>url: ${error.config.url}</p>
      <p>timeout: ${!!error.request.timeout}</p>
      <p>response-body: ${error.response && error.response.body}</p>
    `;
    store.commit('createToast', {title: 'HTTP Error', message, color: 'danger'});
  } else {
    store.commit('createToast', {title: 'Unknown Error', message: error.toString(), color: 'danger'});
  }
  return Promise.reject(error);
});

const store = new Vuex.Store({
  state: {
    keyIncrement: 0,
    events: [],
    layout: 'cards',
    loadedItems: [],
    loadedBoxes: [],
    toasts: []
  },
  getters: {
    getEventSlug: state => state.route && state.route.params.event? state.route.params.event : state.events.length ? state.events[0].slug : '36C3',
    getActiveView: state => state.route.name || 'items',
    getFilters: state => state.route.query,
    getBoxes: state => state.loadedBoxes
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
    removeItem(state, item) {
      state.loadedItems = state.loadedItems.filter(it => it !== item );
    },
    appendItem(state, item) {
      state.loadedItems.push(item);
    },
    createToast(state, { title, message, color }) {
      state.toasts.push({ title, message, color, key: state.keyIncrement });
      state.keyIncrement += 1;
    },
    removeToast(state, key) {
      state.toasts = state.toasts.filter(toast => toast.key !== key);
    }
  },
  actions: {
    async loadEvents({ commit }) {
      const { data } = await axios.get('/1/events');
      commit('replaceEvents', data);
    },
    changeEvent({ dispatch, getters}, eventName) {
      router.push({path: `/${eventName.slug}/${getters.getActiveView}`});
      dispatch('loadEventItems');
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
    async searchEventItems({ commit, getters }, query) {
      const foo = utf8.encode(query);
      const bar = base64.encode(foo);

      const {data} = await axios.get(`/1/${getters.getEventSlug}/items/${bar}`);
      commit('replaceLoadedItems', data);
    },
    async loadBoxes({ commit }) {
      const { data } = await axios.get('/1/boxes');
      commit('replaceBoxes', data);
    },
    async updateItem({ commit, getters }, item) {
      const { data } = await axios.put(`/1/${getters.getEventSlug}/item/${item.uid}`, item);
      commit('updateItem', data);
    },
    async deleteItem({ commit, getters }, item) {
      await axios.delete(`/1/${getters.getEventSlug}/item/${item.uid}`, item);
      commit('removeItem',item);
    },
    async postItem({ commit, getters }, item) {
      const { data } = await axios.post(`/1/${getters.getEventSlug}/item`, item);
      commit('appendItem', data);
    }
  }
});

export default store;

store.dispatch('loadEvents').then(() =>{
  store.dispatch('loadEventItems');
  store.dispatch('loadBoxes');
});
