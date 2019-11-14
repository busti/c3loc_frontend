<template>
    <div id="app">
        <Navbar/>

        <div class="container mt-2">
            <Table/>
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Navbar from '@/components/Navbar';

export default {
  name: 'app',
  components: { Navbar, Table },
};
</script>

<style>
    body, html, #app {
        background: #222;
    }
</style>
