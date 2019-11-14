<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="dropdown">
            <button class="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ activeEvent }}
            </button>
            <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item text-light" href="#" v-for="(event, index) in events" v-bind:key="index"
                   :class="{ active: event === activeEvent }" @click="changeEvent(event)">{{ event }}</a>
            </div>
        </div>

        <div class="custom-control-inline">
            <button type="button" class="btn mx-1 text-nowrap" v-for="(button, index) in buttons" v-bind:key="index" :class="['btn-' + button.color]">
                <font-awesome-icon :icon="button.icon"/>&nbsp;{{ button.title }}
            </button>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <form class="form-inline mt-1 my-lg-auto my-xl-auto w-100 d-inline">
            <input class="form-control w-100" type="search" placeholder="Search" aria-label="Search">
        </form>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-for="(link, index) in links" v-bind:key="index">
                    <a class="nav-link text-nowrap" href="#">{{ link }}</a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {
  name: 'Navbar',
  data: () => ({
    links: ['items', 'boxes', 'mass-edit'],
    buttons: [
      { title: 'Add', icon: 'plus', color: 'success' },
      { title: 'Refresh', icon: 'sync-alt', color: 'primary' },
      { title: 'Placeholder', icon: 'cat', color: 'warning' },
    ]
  }),
  computed: {
    ...mapState(['events', 'activeEvent'])
  },
  methods: {
    ...mapActions(['changeEvent'])
  }
};
</script>
