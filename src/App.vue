<template>
    <div id="app">
        <Navbar/>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: { Navbar },
  computed: mapState(['loadedItems', 'layout'])
};
</script>

<style>
    body, html, #app {
        background: #000;
    }
</style>

