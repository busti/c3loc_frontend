<template>
  <div class="container-fluid px-xl-5 mt-3">
    <div class="row">
      <div class="col-xl-8 offset-xl-2">
        <Table
          :columns="['hash', 'uid']"
          :items="loadedItems"
          :keyName="'hash'"
          v-slot="{ item }"
        >
          <div class="btn-group">
            <button class="btn btn-danger" @click.stop="" >
              <font-awesome-icon icon="trash"/> delete
            </button>
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
  name: 'Files',
  components: {Table},
  computed: mapState(['loadedItems']),
  methods: mapActions([]),
};
</script>

<style scoped>

</style>