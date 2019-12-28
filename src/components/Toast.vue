<template>
    <div class="toast" :class="color && ('border-' + color)" role="alert" ref="toast" data-autohide="false">
        <div class="toast-header" :class="[color && ('bg-' + color), color && 'text-light']">
            <strong class="mr-auto pr-3">{{ title }}</strong>
            <small>{{ displayTime }}</small>
            <button type="button" class="ml-2 mb-1 close" @click="close()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body" v-html="message">{{ message }}</div>
    </div>
</template>

<script>
import $ from 'jquery';
import 'bootstrap/js/dist/toast';
import { DateTime } from 'luxon';

export default {
  name: 'Toast',
  props: ['title', 'message', 'color'],
  data: () => ({
    creationTime: DateTime.local(),
    displayTime: 'just now',
    timer: undefined
  }),
  mounted() {
    const { toast } = this.$refs;
    $(toast).toast('show');
    this.timer = setInterval(this.updateDisplayTime, 1000);
  },
  methods: {
    close() {
      const { toast } = this.$refs;
      $(toast).toast('hide');
      window.setTimeout(() => {
        this.$emit('close');
      }, 500);
    },
    updateDisplayTime() {
      this.displayTime = this.creationTime.toRelative();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>