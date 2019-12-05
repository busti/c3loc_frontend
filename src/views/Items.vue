<template>
    <div class="container-fluid px-xl-5 mt-3">
        <div class="row" v-if="layout === 'table'">
            <div class="col-xl-8 offset-xl-2">
                <Table
                        :columns="['iid', 'item_uid', 'bezeichnung', 'container']"
                        :items="loadedItems"
                        :keyName="'item_uid'"
                />
            </div>
        </div>
        <Cards
                v-if="layout === 'cards'"
                :columns="['iid', 'item_uid', 'bezeichnung', 'container']"
                :items="loadedItems"
                :keyName="'item_uid'"
                v-slot="{ item }"
        >
            <img
                    :src="`https://c3lf.de/api/1/thumbs/${item.file}`"
                    alt="item"
                    class="card-img-top img-fluid"
            >
            <div class="card-body">
                <h6 class="card-title">{{ item.bezeichnung }}</h6>
                <h6 class="card-subtitle text-secondary">uid: {{ item.item_uid }} box: {{ item.container }}</h6>
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
  created() {
    console.log(this.$route.params.event);
  },
  computed: mapState(['loadedItems', 'layout']),
};
</script>

<style scoped>

</style>