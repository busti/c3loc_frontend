<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col" v-for="(column, index) in columns" :key="index">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <button
                                    :class="[ 'btn', column === sortBy ? 'btn-outline-info' : 'btn-outline-secondary' ]"
                                    @click="toggleSort(column)"
                            >
                                {{ column }}
                                <span :class="{ 'text-info': column === sortBy }">
                                    <font-awesome-icon :icon="getSortIcon(column)"/>
                                </span>
                            </button>
                        </div>
                        <input
                                type="text"
                                class="form-control"
                                placeholder="filter"
                                :value="filters[column]"
                                @input="changeFilter(column, $event.target.value)"
                        >
                    </div>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in internalItems" :key="item[keyName]" @click="$emit('itemActivated', item)">
                <td v-for="(column, index) in columns" :key="index">{{ item[column] }}</td>
                <td>
                  <slot v-bind:item="item"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import DataContainer from '@/mixins/data-container';
import router from '../router';

export default {
  name: 'Table',
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

<style>
    .table-body-move {
        transition: transform 1s;
    }
</style>