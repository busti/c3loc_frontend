<template>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col" v-for="(column, index) in columns" :key="index">
                    <button class="btn text-light" @click="toggleSort(column)">
                        {{ column }}
                        <span :class="{ 'text-info': column === sortBy }">
                            <font-awesome-icon :icon="getSortIcon(column)"/>
                        </span>
                    </button>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in internalItems" :key="item[keyName]">
                <td v-for="(column, index) in columns" :key="index">{{ item[column] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import DataContainer from '@/mixins/data-container';

export default {
  name: 'Table',
  mixins: [DataContainer]
};
</script>

<style>
    .table-body-move {
        transition: transform 1s;
    }
</style>