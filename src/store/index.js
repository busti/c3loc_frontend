import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: ['35c3', 'camp19', '36c3'],
    activeEvent: '36c3',
    loadedItems: [
      { uid: 1, description: 'sleeping bag', box: 7, image: 41 },
      { uid: 2, description: 'tent', box: 7, image: 23 },
      { uid: 3, description: 'chest', box: 7, image: 52 },
      { uid: 4, description: 'power supply black', box: 5, image: 62 },
      { uid: 5, description: 'pullover yellow "pesthörnchen"', box: 5, image: 84 },
      { uid: 6, description: '"blue black second skin"', box: 6, image: 72 },
      { uid: 7, description: '"the bike blog" bottle orange', box: 6, image: 71 }
    ]
  },
  mutations: {
    changeEvent(state, event) {
      state.activeEvent = event;
    }
  },
  actions: {
    changeEvent({ commit }, event) {
      // todo: load items from server
      commit('changeEvent', event);
    }
  }
});
