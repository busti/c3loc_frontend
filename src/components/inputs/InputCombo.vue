<template>
    <div class="form-group">
        <label :for="label">{{ label }}</label>
        <div class="input-group">
            <div class="input-group-prepend">
                <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                >Search</button>
                <div class="dropdown-menu">
                    <a
                        v-for="option in options"
                        :key="option"
                        class="dropdown-item"
                        @click="setInternalValue(option)"
                    >
                        {{ option }}
                    </a>
                </div>
                <button
                    class="btn"
                    :class="{ 'btn-info disabled': isValid, 'btn-success': !isValid }"
                    @click="addOption()"
                >
                    <font-awesome-icon icon="plus"/>
                </button>
            </div>
            <input type="text" class="form-control" :id="label" v-model="internalValue">
            <Addon type="Combo Box" :is-valid="isValid"/>
        </div>
    </div>
</template>

<script>
import Addon from './Addon';

export default {
  name: 'InputCombo',
  components: {Addon},
  props: [ 'label', 'model', 'field', 'options', 'onOptionAdd' ],
  data: ({ model, field }) => ({
    internalValue: model[field],
    addingOption: false
  }),
  computed: {
    isValid: ({ internalValue, options }) => options.includes(internalValue)
  },
  watch: {
    internalValue(newValue, oldValue) {
      console.log(oldValue, newValue, this.isValid);
      if (this.isValid)
        this.model[this.field] = newValue;
    }
  },
  methods: {
    setInternalValue(value) {
      this.internalValue = value;
    },
    addOption() {
      this.onOptionAdd(this.internalValue);
    }
  }
};
</script>
