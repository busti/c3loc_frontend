<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="dropdown">
            <button class="btn text-light dropdown-toggle btn-heading" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{getEventSlug}}
            </button>
            <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item text-light" href="#" v-for="(event, index) in events" v-bind:key="index"
                   :class="{ active: event.slug === getEventSlug }" @click="changeEvent(event)">{{ event.slug }}</a>
            </div>
        </div>

        <div class="custom-control-inline mr-1">
            <button type="button" class="btn mx-1 text-nowrap" v-for="(button, index) in buttons" v-bind:key="index" :class="['btn-' + button.color]">
                <font-awesome-icon :icon="button.icon"/><span class="d-none d-md-inline">&nbsp;{{ button.title }}</span>
            </button>
            <div class="btn-group btn-group-toggle">
                <button :class="['btn', 'btn-info', { active: layout === 'cards' }]" @click="setLayout('cards')">
                    <font-awesome-icon icon="th"/>
                </button>
                <button :class="['btn', 'btn-info', { active: layout === 'table' }]" @click="setLayout('table')">
                    <font-awesome-icon icon="list"/>
                </button>
            </div>
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
                <li class="nav-item dropdown">
                    <button class="btn nav-link dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{getActiveView}}
                    </button>
                    <ul class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                        <li class="" v-for="(link, index) in views" v-bind:key="index" :class="{ active: link.path === getActiveView }">
                            <a class="nav-link text-nowrap" href="#" @click="changeView(link)">{{ link.title }}</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item" v-for="(link, index) in links" v-bind:key="index">
                    <a class="nav-link text-nowrap" :href="link.path">{{ link.title }}</a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters} from 'vuex';


export default {
  name: 'Navbar',
  data: () => ({
    views: [
      {'title':'items','path':'items'},
      {'title':'boxes','path':'boxes'},
      //{'title':'mass-edit','path':'massedit'},
    ],
    links: [
      {'title':'howto engel','path':'/howto/'}
    ],
    buttons: [
      { title: 'Add', icon: 'plus', color: 'success' },
      //{ title: 'Refresh', icon: 'sync-alt', color: 'primary' },
    ]
  }),
  computed: {
    ...mapState(['events', 'activeEvent', 'layout']),
    ...mapGetters(['getEventSlug', 'getActiveView']),
  },
  methods: {
    ...mapActions(['changeEvent', 'changeView']),
    ...mapMutations(['setLayout'])
  }
};
</script>

<style lang="scss">
    @import "../scss/navbar.scss";
</style>