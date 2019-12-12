<template>
    <div class="container-fluid px-xl-5 mt-3">
        <div class="row">
            <div class="col-xl-8 offset-xl-2">
                <Table
                    :columns="['cid', 'name']"
                    :items="loadedBoxes"
                    :keyName="'item_uid'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Table from '@/components/Table';
export default {
  name: 'Boxes',
  components: {Table},
  computed: mapState(['loadedBoxes', 'layout']),
};
</script>

<style scoped>

</style>