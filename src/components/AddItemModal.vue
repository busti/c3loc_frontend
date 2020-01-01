<template>
   <div>
       <Modal v-if="isModal" title="Add Item" @close="$emit('close')">
           <template #body>
               <EditItem :item="item"/>
           </template>
           <template #buttons>
               <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
               <button type="button" class="btn btn-success" @click="saveNewItem()">Save new Item</button>
           </template>
       </Modal>
   </div>
</template>

<script>
import Modal from '@/components/Modal';
import EditItem from '@/components/EditItem';

export default {
  name: 'AddItemModal',
  components: { Modal, EditItem },
  props: ['isModal'],
  data: () => ({
    item: {}
  }),
  created() {
    this.item = {box: this.$store.state.lastUsed.box || '', cid: this.$store.state.lastUsed.cid || ''};
  },
  methods: {
    saveNewItem() {
      this.$store.dispatch('postItem', this.item).then(() => {
        this.$emit('close');
      });
    }
  }
};
</script>

<style scoped>

</style>