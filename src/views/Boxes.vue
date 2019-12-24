<template>
    <div class="container-fluid px-xl-5 mt-3">
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['cid', 'name']"
                    :items="loadedBoxes"
                    :keyName="'cid'"
                    v-slot="{ item }"
                >
                  <div class="btn-group">
                    <button class="btn btn-outline-secondary" @click.stop="showBoxContent(item.name)" >content</button>
                    <button class="btn btn-outline-secondary" @click.stop="" >delete</button>
                  </div>
                </Table>
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