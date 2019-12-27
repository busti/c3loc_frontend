<template>
    <div id="app">
        <AddItem v-if="addModalOpen" @close="closeAddModal()" isModal="true"/>
        <Navbar @addClicked="openAddModal()"/>
        <router-view/>
        <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-end align-items-start fixed-top mx-1 my-5 py-3" style="min-height: 200px; z-index: 100000">
            <Toast v-for="toast in toasts" :key="toast" :title="toast.title" :message="toast.message" :color="toast.color" @close="removeToast(toast.key)"/>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import AddItem from '@/components/AddItem';
import Toast from './components/Toast';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'app',
  components: { Toast, Navbar, AddItem },
  computed: mapState(['loadedItems', 'layout', 'toasts']),
  data: () => ({
    addModalOpen: false
  }),
  methods: {
    ...mapMutations(['removeToast']),
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

