import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [
      {'slug': '35c3'},
      {'slug': 'camp19'},
      {'slug': '36c3'}
    ],
    activeEvent: '36c3',
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
  mutations: {
    changeEvent(state, event) {
      state.activeEvent = event;
    },
    setLayout(state, layout) {
      state.layout = layout;
    }
  },
  actions: {
    changeEvent({ commit }, event) {
      // todo: load items from server
      // todo: load items from server
      commit('changeEvent', event);
    }
  }
});
