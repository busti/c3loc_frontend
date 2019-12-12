<template>
    <div class="container-fluid px-xl-5 mt-3">
        <Modal title="Edit Item" v-if="selectedItem" @close="closeModal()">
            <template #body>
                <EditItem
                    :item="selectedItem"
                    badge="item_uid"
                    :fields="['bezeichnung', 'container']"
                />
            </template>
            <template #buttons>
                <button type="button" class="btn btn-secondary" @click="closeModal()">Cancel</button>
                <button type="button" class="btn btn-success">Save Changes</button>
            </template>
        </Modal>
        <div class="row" v-if="layout === 'table'">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['uid', 'description', 'box']"
                    :items="loadedItems"
                    :keyName="'uid'"
                />
            </div>
        </div>
        <Cards
            v-if="layout === 'cards'"
            :columns="['uid', 'description', 'box']"
            :items="loadedItems"
            :keyName="'uid'"
            v-slot="{ item }"
            @itemActivated="selectedItem = $event"
        >
            <img
                :src="`https://c3lf.de/api/1/thumbs/${item.file}`"
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

export default {
  name: 'Items',
  data: () => ({
    selectedItem: null
  }),
  components: { Table, Cards, Modal, EditItem },
  computed: mapState(['loadedItems', 'layout']),
  methods: {
    closeModal: function () {
      console.log('asdasd');
      this.selectedItem = null;
    }
  }
};
</script>

<style scoped>

</style>