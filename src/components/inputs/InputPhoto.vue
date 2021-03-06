<template>
    <div>
        <img
            v-if="!capturing"
            class="img-fluid rounded mx-auto d-block mb-3 img-preview"
            :src="dataImage || `https://c3lf.de/api/1/thumbs/${model[field]}`"
            alt="Image not available."
        />
        <video
            v-if="capturing"
            ref="video"
            class="img-fluid rounded mx-auto d-block mb-3 img-preview"
        >
            Video stream not available.
        </video>
        <canvas ref="canvas" class="img-fluid d-none img-preview"/>
        <div class="row" v-if="capturing && !streaming">
            <div class="spinner-grow text-danger mx-auto" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div class="row m-auto">
            <label for="file" class="btn btn-info my-2">
                <font-awesome-icon icon="save"/>&nbsp;Upload&nbsp;an&nbsp;image&nbsp;instead
            </label>
            <input type="file" id="file" accept="image/png" class="d-none" @change="onFileChange($event)">
            <button v-if="!capturing" class="btn my-2 ml-auto btn-secondary" @click="openStream()">
              <font-awesome-icon icon="camera"/>
            </button>
            <div v-if="capturing" class="btn-group my-2 ml-auto">
                <button class="btn btn-success" @click="captureVideoImage()">
                    <font-awesome-icon icon="camera"/>&nbsp;Capture
                </button>
                <button
                    class="btn"
                    :class="(model[field] || dataImage) ? 'btn-danger' : 'btn-secondary disabled'"
                    @click="(model[field] || dataImage) && closeStream()"
                >
                    <font-awesome-icon icon="stop"/>&nbsp;Abort
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'InputPhoto',
  props: [ 'model', 'field', 'onCapture' ],
  data: () => ({
    capturing: false,
    streaming: false,
    stream: undefined,
    dataImage: undefined
  }),
  methods: {
    ...mapMutations(['createToast']),
    openStream() {
      if (!this.capturing) {
        this.capturing = true;
        this.streaming = false;
        navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(stream => {
          this.stream = stream;
          const { video } = this.$refs;
          video.srcObject = stream;
          video.play();
          video.addEventListener('canplay', () => {
            this.streaming = true;
          }, false);
        }).catch(err => console.log(err)); // todo: toast error
      }
    },
    captureVideoImage() {
      const { video, canvas } = this.$refs;
      const context = canvas.getContext('2d');
      const { videoWidth, videoHeight } = video;
      canvas.width = videoWidth;
      canvas.height = videoHeight;
      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      this.dataImage = canvas.toDataURL('image/png');
      this.onCapture(this.dataImage);
      this.closeStream();
    },
    closeStream() {
      if (this.capturing) {
        this.stream.getTracks().forEach(s => s.stop());
        this.capturing = false;
        this.streaming = false;
      }
    },
    onFileChange({ target }) {
      const file = target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      const self = this;
      reader.onload = function () {
        self.dataImage = reader.result;
        self.onCapture(self.dataImage);
        self.closeStream();
      };
      reader.onerror = function (error) {
        this.createToast({ title: 'Error: Failed to parse image file', message: error.toString(), color: 'danger' });
        console.log('Error: ', error);
      };
    }
  },
  mounted() {
    if (!this.model[this.field])
      this.openStream();
  },
  beforeDestroy() {
    this.closeStream();
  }
};
</script>

<style>
  .img-preview{
    max-height: 30vh;
  }
</style>