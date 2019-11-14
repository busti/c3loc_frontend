<template>
    <div id="app">
        <Navbar/>

        <div class="container mt-2">
            <Table
                :columns="['uid', 'description', 'box', 'image']"
                :items="loadedItems"
                :keyName="'uid'"
            />
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Navbar from '@/components/Navbar';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: { Navbar, Table },
  computed: mapState(['loadedItems'])
};
</script>

<style>
    body, html, #app {
        background: #000;
    }
</style>
