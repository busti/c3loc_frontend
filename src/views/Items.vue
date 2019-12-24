<template>
    <div class="container-fluid px-xl-5 mt-3">
        <Modal title="Edit Item" v-if="editingItem" @close="closeEditingModal()">
            <template #body>
                <EditItem
                    :item="editingItem"
                    badge="item_uid"
                />
            </template>
            <template #buttons>
                <button type="button" class="btn btn-secondary" @click="closeEditingModal()">Cancel</button>
                <button type="button" class="btn btn-success" @click="saveEditingItem()">Save Changes</button>
            </template>
        </Modal>
        <Lightbox v-if="lightboxItem" :file="lightboxItem.file" @close="closeLightboxModal()"/>
        <div class="row" v-if="layout === 'table'">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['uid', 'description', 'box']"
                    :items="loadedItems"
                    :keyName="'uid'"
                    v-slot="{ item }"
                    @itemActivated="openLightboxModalWith($event)"
                >
                  <div class="btn-group">
                    <button class="btn btn-secondary" @click.stop="openEditingModalWith(item)" >
                      <font-awesome-icon icon="edit"/>
                    </button>
                    <button class="btn btn-danger" @click.stop="deleteItem(item)" >
                      <font-awesome-icon icon="trash"/>
                    </button>
                  </div>
                </Table>
            </div>
        </div>
        <Cards
            v-if="layout === 'cards'"
            :columns="['uid', 'description', 'box']"
            :items="loadedItems"
            :keyName="'uid'"
            v-slot="{ item }"
            @itemActivated="openLightboxModalWith($event)"
        >
            <img
                :src="`${baseUrl}/1/thumbs/${item.file}`"
                class="card-img-top img-fluid"
            >
            <div class="card-body">
                <h6 class="card-title">{{ item.description }}</h6>
                <h6 class="card-subtitle text-secondary">uid: {{ item.uid }} box: {{ item.box }}</h6>
                <div class="row mx-auto mt-2">
                    <div class="btn-group">
                        <button class="btn btn-outline-secondary" @click.stop="openEditingModalWith(item)">
                          <font-awesome-icon icon="edit"/> edit
                        </button>
                        <button class="btn btn-outline-danger" @click.stop="deleteItem(item)">
                          <font-awesome-icon icon="trash"/> delete
                        </button>
                    </div>
                </div>
            </div>
        </Cards>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Cards from '@/components/Cards';
import Modal from '@/components/Modal';
import EditItem from '@/components/EditItem';
import {mapActions, mapState} from 'vuex';
import config from '../config';
import Lightbox from '../components/Lightbox';

export default {
  name: 'Items',
  data: () => ({
    lightboxItem: null,
    editingItem: null,
    baseUrl: config.service.url,
  }),
  components: {Lightbox, Table, Cards, Modal, EditItem },
  computed: mapState(['loadedItems', 'layout']),
  methods: {
    ...mapActions(['deleteItem']),
    openLightboxModalWith(item) { // Opens the editing modal with a copy of the selected item.
      this.lightboxItem = { ...item };
    },
    closeLightboxModal() { // Closes the editing modal and discards the edited copy of the item.
      this.lightboxItem = null;
    },
    openEditingModalWith(item) {
      this.editingItem = item;
    },
    closeEditingModal() {
      this.editingItem = null;
    },
    saveEditingItem() { // Saves the edited copy of the item.
      this.$store.dispatch('updateItem', this.editingItem);
      this.closeLightboxModal();
    }
  }
};
</script>

<style scoped>

</style>