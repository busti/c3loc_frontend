import * as R from 'ramda';

export default {
  props: ['columns', 'items', 'actions', 'keyName'],
  data: (self) => ({
    sortBy: self.keyName,
    ascend: true,
    filters: R.fromPairs(self.columns.map(column => [column, '']))
  }),
  computed: {
    internalItems() {
      const filtered = this.items.filter(item => this.columns
        .map(column => {
          const field  = item[column] + '';
          const filter = this.filters[column];
          return field.toLowerCase().includes(filter.toLowerCase());
        }).reduce((acc, nxt) => acc && nxt, true)
      );
      const sortByOrd = R.sortBy(R.prop(this.sortBy));
      const sorted = sortByOrd(filtered, [this.sortBy]);
      return this.ascend ? sorted : R.reverse(sorted);
    }
  },
  methods: {
    getSortIcon(column) {
      if (column !== this.sortBy) return 'sort';
      if (this.ascend) return 'sort-up';
      return 'sort-down';
    },
    toggleSort(column) {
      if (column === this.sortBy)
        this.ascend = !this.ascend;
      this.sortBy = column;
    },
    setFilter(column, filter) {
      this.filters[column] = filter;
    }
  }
};