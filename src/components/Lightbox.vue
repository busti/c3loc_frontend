<template>
    <Modal @close="$emit('close')">
        <template #body>
            <img
                class="img-fluid rounded mx-auto d-block mb-3 w-100"
                :src="`https://c3lf.de/api/1/thumbs/${file}`"
                alt="Image not available."
                id="lightbox-image"
            >
        </template>
        <template #buttons>
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Cancel</button>
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'Lightbox',
  components: { Modal },
  props: ['file']
};
</script>

<style>
  #lightbox-image {
    max-height: 75vh;
    object-fit: contain;
  }
</style>