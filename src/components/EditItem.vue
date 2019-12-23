<template>
    <div>
        <h6>Editing Item <span class="badge badge-secondary">#{{ item.item_uid }}</span></h6>
        <InputPhoto
            :model="item"
            field="file"
            :on-capture="storeImage"
        />
        <InputString
            label="description"
            :model="item"
            field="description"
            :validation-fn="str => str.length > 0"
        />
        <InputCombo
            label="box"
            :model="item"
            field="box"
            :options="getBoxes"
        />
    </div>
</template>

<script>
import InputString from './inputs/InputString';
import InputCombo from './inputs/InputCombo';
import { mapGetters } from 'vuex';
import InputPhoto from './inputs/InputPhoto';

export default {
  name: 'EditItem',
  components: {InputPhoto, InputCombo, InputString },
  props: ['item'],
  computed: {
    ...mapGetters(['getBoxes']),
    boxes({ getBoxes }) {
      return getBoxes.map(box => box.name);
    }
  },
  methods: {
    storeImage(image) {
      this.item.dataImage = image;
    }
  }
};
</script>
