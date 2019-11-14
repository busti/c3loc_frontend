<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col" v-for="(column, index) in columns" :key="index">
                    <button class="btn text-light" v-on:click="toggleSort(column)">
                        {{ column }}
                        <span :class="{ 'text-info': column === sortBy }">
                            <font-awesome-icon :icon="sortIcon(column)"/>
                        </span>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in internalItems" :key="item[keyName]">
                <td v-for="(column, index) in columns" :key="index">{{ item[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import * as R from 'ramda';

export default {
  name: 'Table',
  props: ['columns', 'items', 'keyName'],
  data: (self) => ({
    sortBy: self.keyName,
    ascend: true
  }),
  computed: {
    internalItems() {
      const sortByOrd = R.sortBy(R.prop(this.sortBy));
      const sorted = sortByOrd(this.items, [this.sortBy]);
      return this.ascend ? sorted : R.reverse(sorted);
    }
  },
  methods: {
    sortIcon(column) {
      if (column !== this.sortBy) return 'sort';
      if (this.ascend) return 'sort-up';
      return 'sort-down';
    },
    toggleSort(column) {
      if (column === this.sortBy)
        this.ascend = !this.ascend;
      this.sortBy = column;
    }
  }
};
</script>

<style>
    .table-body-move {
        transition: transform 1s;
    }
</style>