<template>
  <div class="container-fluid px-xl-5 mt-3">
    <div class="row">
      <div class="col-xl-8 offset-xl-2">
        <Table
          :columns="['slug', 'name']"
          :items="events"
          :keyName="'slug'"
          v-slot="{ item }"
        >
          <div class="btn-group">
            <button class="btn btn-secondary" @click.stop="changeEvent(item)" >
              <font-awesome-icon icon="archive"/> use
            </button>
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
  name: 'Events',
  components: {Table},
  computed: mapState(['events']),
  methods: mapActions(['changeEvent']),
};
</script>

<style scoped>

</style>