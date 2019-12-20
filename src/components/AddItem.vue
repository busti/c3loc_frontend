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
  name: 'AddItem',
  components: { Modal, EditItem },
  props: ['isModal'],
  data: () => ({
    item: {}
  }),
  methods: {
    saveNewItem() {
      this.$store.dispatch('postItem', this.item);
    }
  }
};
</script>

<style scoped>

</style>