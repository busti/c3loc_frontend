<template>
    <div class="row">
        <div class="col-lg-3 col-xl-2">
            <div class="card bg-dark text-light mb-2" id="filters">
                <div class="card-body">
                    <h5 class="card-title text-info">Sort & Filter</h5>
                    <div class="form-group" v-for="(column, index) in columns" :key="index">
                        <label>{{ column }}</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <button
                                    :class="[ 'btn', column === sortBy ? 'btn-outline-info' : 'btn-outline-secondary' ]"
                                    type="button"
                                    @click="toggleSort(column)">
                                    <font-awesome-icon :icon="getSortIcon(column)"/>
                                </button>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="filter"
                                :value="filters[column]"
                                @input="setFilter(column, $event.target.value)"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-9 col-xl-8">
            <transition-group name="card-list" tag="div" class="card-columns">
                <div class="card-list-item card bg-dark text-light" v-for="item in internalItems" :key="item[keyName]">
                    <slot v-bind:item="item"/>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script>
import DataContainer from '@/mixins/data-container';

export default {
  name: 'Cards',
  mixins: [DataContainer],
  methods: {
    random: () => Math.floor((Math.random() * 500) + 300)
  }
};
</script>

<style>
    .card-list-item {
        transition: all 1s ease-in-out;
    }

    .card-list-enter, .card-list-leave-to {
        opacity: 0;
    }

    .card-list-leave-active {
        position: absolute;
    }
</style>