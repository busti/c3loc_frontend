<template>
    <div id="app">
        <AddItem v-if="addModalOpen" @close="closeAddModal()" isModal="true"/>
        <Navbar @addClicked="openAddModal()"/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import AddItem from '@/components/AddItem';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: { Navbar, AddItem },
  computed: mapState(['loadedItems', 'layout']),
  data: () => ({
    addModalOpen: false
  }),
  methods: {
    openAddModal() {
      this.addModalOpen = true;
    },
    closeAddModal() {
      this.addModalOpen = false;
    }
  }
};
</script>

<style>
    body, html, #app {
        background: #000;
    }
</style>

