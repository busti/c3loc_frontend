<template>
    <div class="row">
        <div class="col-lg-3 col-xl-2">
            <div class="card bg-dark text-light mb-2" id="filters">
                <div class="card-body">
                    <h5 class="card-title text-info">Sort & Filter</h5>
                    <div class="form-group" v-for="(column, index) in columns" :key="index">
                        <label>{{ column }}</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button
                                    :class="[ 'btn', column === sortBy ? 'btn-outline-info' : 'btn-outline-secondary' ]"
                                    type="button"
                                    @click="toggleSort(column)">
                                    <font-awesome-icon :icon="getSortIcon(column)"/>
                                </button>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="filter"
                                :value="filters[column]"
                                @input="changeFilter(column, $event.target.value)"
                            >
                        <!-- <input @change="someHandler"> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-xl-8">
          <div class="row">
            <div
              class="mb-4 col-lg-4 col-xl-3"
              v-for="item in internalItems"
              :key="item[keyName]"
              >
              <div
                  class="card-list-item card bg-dark text-light"
                  @click="$emit('itemActivated', item)"
              >
                <slot v-bind:item="item"/>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import DataContainer from '@/mixins/data-container';
import router from '../router';

export default {
  name: 'Cards',
  mixins: [DataContainer],
  created() {
    this.columns.map(e => ({k: e, v: this.$store.getters.getFilters[e]})).filter(e => e.v).forEach(e => this.setFilter(e.k, e.v));
  },
  methods: {
    changeFilter(col, val) {
      this.setFilter(col, val);
      let newquery = Object.entries({...this.$store.getters.getFilters, [col]: val}).reduce((a,[k,v]) => (v ? {...a, [k]:v} : a), {});
      router.push({query: newquery});
    },
  },
};
</script>
