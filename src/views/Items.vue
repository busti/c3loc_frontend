<template>
    <div class="container-fluid px-xl-5 mt-3">
        <Modal title="Edit Item" v-if="selectedItem" @close="closeModal()">
            <template #body>
                <EditItem
                    :item="selectedItem"
                    badge="item_uid"
                />
            </template>
            <template #buttons>
                <button type="button" class="btn btn-secondary" @click="closeModal()">Cancel</button>
                <button type="button" class="btn btn-success" @click="saveSelectedItem()">Save Changes</button>
            </template>
        </Modal>
        <div class="row" v-if="layout === 'table'">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['uid', 'description', 'box']"
                    :actions="['enlarge', 'delete']"
                    :items="loadedItems"
                    :keyName="'uid'"
                    @itemActivated="openModalWith($event)"
                />
            </div>
        </div>
        <Cards
            v-if="layout === 'cards'"
            :columns="['uid', 'description', 'box']"
            :actions="['delete']"
            :items="loadedItems"
            :keyName="'uid'"
            v-slot="{ item }"
            @itemActivated="openModalWith($event)"
        >
            <img
                :src="`${baseUrl}/1/thumbs/${item.file}`"
                class="card-img-top img-fluid"
            >
            <div class="card-body">
                <h6 class="card-title">{{ item.description }}</h6>
                <h6 class="card-subtitle text-secondary">uid: {{ item.uid }} box: {{ item.box }}</h6>
            </div>
        </Cards>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Cards from '@/components/Cards';
import Modal from '@/components/Modal';
import EditItem from '@/components/EditItem';
import { mapState } from 'vuex';
import config from '../config';

export default {
  name: 'Items',
  data: () => ({
    selectedItem: null,
    baseUrl: config.service.url,
  }),
  components: { Table, Cards, Modal, EditItem },
  computed: mapState(['loadedItems', 'layout']),
  methods: {
    openModalWith(item) { // Opens the editing modal with a copy of the selected item.
      this.selectedItem = { ...item };
    },
    closeModal() { // Closes the editing modal and discards the edited copy of the item.
      this.selectedItem = null;
    },
    saveSelectedItem() { // Saves the edited copy of the item.
      this.$store.dispatch('updateItem', this.selectedItem);
      this.closeModal();
    }
  }
};
</script>

<style scoped>

</style>