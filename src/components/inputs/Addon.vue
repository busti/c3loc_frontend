<template>
  <div class="input-group-append">
      <span
          class="input-group-text"
          data-toggle="tooltip"
          data-placement="top"
          :title="type"
      >{{ type[0] }}</span>
      <button
          type="button"
          class="btn"
          :class="'btn-' + color"
          data-toggle="tooltip"
          data-placement="top"
          :title="tooltip"
      >
          <font-awesome-icon :icon="icon"/>
      </button>
  </div>
</template>

<script>
import $ from 'jquery';
import 'bootstrap/js/dist/tooltip';

export default {
  name: 'Addon',
  props: [ 'type', 'isValid' ],
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  computed: {
    icon() {
      if (this.isValid == undefined) return 'pen';
      if (this.isValid == false) return 'times';
      return 'check';
    },
    color() {
      if (this.isValid == undefined) return 'info';
      if (this.isValid == false) return 'danger';
      return 'success';
    },
    tooltip() {
      if (this.isValid == undefined) return 'no data validation';
      if (this.isValid == false) return 'data invalid';
      return 'data valid';
    }
  }
};
</script>
