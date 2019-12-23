<template>
    <div class="form-group">
        <label :for="label">{{ label }}</label>
        <div class="input-group">
            <input type="text" class="form-control" :id="label" v-model="model[field]">
            <Addon v-if="!hasValidationFn" type="String"/>
            <Addon v-if="hasValidationFn" type="String" :is-valid="isValid"/>
        </div>
    </div>
</template>

<script>
import Addon from './Addon';

export default {
  name: 'InputString',
  components: { Addon },
  props: [ 'label', 'model', 'field', 'validationFn' ],
  computed: {
    hasValidationFn({ validationFn }) {
      return validationFn != undefined;
    },
    isValid({ model, field, validationFn, hasValidationFn }) {
      if (!hasValidationFn) return true;
      return validationFn(model[field]);
    }
  }
};
</script>