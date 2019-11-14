<template>
    <table class="table table-striped table-dark">
        <thead>
        <tr>
            <th scope="col" v-for="(column, index) in columns" :key="index">{{ column.name }}</th>
        </tr>
        </thead>
    </table>
</template>

<script>
export default {
  name: 'Table',
  data: () => ({
    columns: [
      { name: 'uid', sortFn: (items) => items },
      { name: 'description', sortFn: (items) => items },
      { name: 'box', sortFn: (items) => items },
      { name: 'image', sortFn: (items) => items }
    ]
  })
};
</script>