<template>
  <div>
    <img class="img-fluid rounded mx-auto d-block mb-3" :src="`https://c3lf.de/api/1/thumbs/${item.file}`"/>
    <h6>Editing Item <span class="badge badge-secondary">#{{ item[badge] }}</span></h6>
    <form>
        <div class="form-group" v-for="field in ['description', 'box']" :key="field">
            <label>{{ field }}</label>
            <input type="text" class="form-control" v-model="item[field]">
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: ['item', 'badge']
};
</script>
