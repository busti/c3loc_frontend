<template>
    <div id="app">
        <Navbar/>
        <div class="container-fluid px-xl-5 mt-3">
            <div class="row" v-if="layout === 'table'">
                <div class="col-xl-8 offset-xl-2">
                    <Table
                        :columns="['uid', 'description', 'box', 'image']"
                        :items="loadedItems"
                        :keyName="'uid'"
                    />
                </div>
            </div>
            <Cards
                v-if="layout === 'cards'"
                :columns="['uid', 'description', 'box', 'image']"
                :items="loadedItems"
                :keyName="'uid'"
                v-slot="{ item }"
            >
                <img
                    :src="`https://picsum.photos/id/${item.image + 50}/200/200`"
                    alt="item"
                    class="card-img-top img-fluid"
                >
                <div class="card-body">
                    <h6 class="card-title">{{ item.description }}</h6>
                    <h6 class="card-subtitle text-secondary">uid: {{ item.uid }} box: {{ item.box }}</h6>
                </div>
            </Cards>
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Navbar from '@/components/Navbar';
import Cards from '@/components/Cards';
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: { Navbar, Table, Cards },
  computed: mapState(['loadedItems', 'layout'])
};
</script>

<style>
    body, html, #app {
        background: #000;
    }
</style>

