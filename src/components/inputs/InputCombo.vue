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
                        :key="option[uniqueKey]"
                        class="dropdown-item"
                        @click="setInternalValue(option)"
                    >
                      {{ option[nameKey] }}
                    </a>
                </div>
            </div>
            <input type="text" class="form-control" :id="label" v-model="internalName">
            <div class="input-group-append">
              <button
                class="btn"
                :class="{ 'btn-info disabled': isValid, 'btn-success': !isValid }"
                v-if="!isValid"
                @click="addOption()"
              >
                <font-awesome-icon icon="plus"/>
              </button>
            </div>
            <Addon type="Combo Box" :is-valid="isValid"/>
        </div>
    </div>
</template>

<script>
import Addon from './Addon';

export default {
  name: 'InputCombo',
  components: {Addon},
  props: [ 'label', 'model', 'nameKey', 'uniqueKey', 'options', 'onOptionAdd' ],
  data: ({ options, model, nameKey, uniqueKey }) => ({
    internalName: model[nameKey],
    selectedOption: options.filter(e => e[uniqueKey] === model[uniqueKey])[0],
    addingOption: false
  }),
  computed: {
    isValid: ({options, nameKey, internalName}) => options.some(e => e[nameKey] === internalName)
  },
  watch: {
    internalName(newValue, oldValue) {
      if (this.isValid) {
        if(newValue!=this.selectedOption[this.nameKey]){
          this.selectedOption = this.options.filter(e => e[this.nameKey] === this.internalName)[0];
        }
        this.model[this.nameKey] = this.selectedOption[this.nameKey];
        this.model[this.uniqueKey] = this.selectedOption[this.uniqueKey];
      }
      console.log(oldValue, newValue, this.isValid);
    }
  },
  methods: {
    setInternalValue(option) {
      this.selectedOption = option;
      this.internalName = option[this.nameKey];
    },
    addOption() {
      this.onOptionAdd({[this.nameKey]: this.internalName});
    }
  }
};
</script>
