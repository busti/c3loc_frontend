<template>
    <div class="container-fluid px-xl-5 mt-3">
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['cid', 'name']"
                    :actions="[
                      {name:'enlarge'},
                      {name:'content', fun: (item,action) => showBoxContent(item.name)},
                      {name:'delete'},
                    ]"
                    :items="loadedBoxes"
                    :keyName="'cid'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Table from '@/components/Table';

export default {
  name: 'Boxes',
  components: {Table},
  computed: mapState(['loadedBoxes', 'layout']),
  methods: mapActions(['showBoxContent']),
};
</script>

<style scoped>

</style>