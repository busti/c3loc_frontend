<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content bg-dark text-light border-secondary">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <font-awesome-icon icon="window-close" class="text-light"></font-awesome-icon>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal'
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
</style>