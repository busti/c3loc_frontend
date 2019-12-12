<template>
    <div class="container-fluid px-xl-5 mt-3">
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
import { mapState } from 'vuex';

export default {
  name: 'Items',
  components: { Table, Cards },
  computed: mapState(['loadedItems', 'layout']),
  methods: {
  }
};
</script>

<style scoped>

</style>