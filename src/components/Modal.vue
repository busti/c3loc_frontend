<template>
    <div class="modal" tabindex="-1" @keyup.esc="$emit('close')">
        <div class="modal-dialog modal-xl">
            <div class="modal-content bg-dark text-light border-secondary">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="close" @click="$emit('close')" aria-label="Close">
                        <font-awesome-icon icon="window-close" class="text-light"/>
                    </button>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        <div class="alert alert-danger">
                            Modal body is empty
                        </div>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="buttons">
                        <div class="alert alert-danger">
                            Modal footer is empty
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['title'],
  mounted() {
    this.$el.focus();
  }
};
</script>

<style>
    .modal {
        background-color: rgba(0,0,0,0.4); /* Transparent dimmed overlay */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table !important;
    }

    .modal.hidden {
        display: none;
    }

    .modal .container {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        width: 200px;
    }

    .modal .body {
        box-shadow: 5px 10px #888888;
        display: inline-block;
        background-color: white;
        border: 1px solid black;
        padding: 10px;
    }

    /* Hacky Fix, for this Issue: https://hannover.ccc.de/gitlab/c3lf/lffrontend/issues/26 */
    /*.modal-body {
      max-height: calc(100vh - 200px);
      overflow-y: auto;
    }*/
</style>