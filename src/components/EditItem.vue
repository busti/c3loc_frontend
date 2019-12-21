<template>
  <div>
      <img
        v-if="!capturing"
        class="img-fluid rounded mx-auto d-block mb-3"
        :src="item.dataImage || `https://c3lf.de/api/1/thumbs/${item.file}`"
        alt="Image not available."
      />
      <video
        v-if="capturing"
        ref="video"
        class="img-fluid rounded mx-auto d-block mb-3"
      >
        Video stream not available.
      </video>
      <canvas ref="canvas" class="img-fluid d-none"/>
      <div class="row" v-if="capturing && !streaming">
          <div class="spinner-grow text-danger mx-auto" role="status">
              <span class="sr-only">Loading...</span>
          </div>
      </div>
      <div class="row m-auto">
          <button v-if="!capturing" class="btn my-2 ml-auto btn-secondary" @click="openStream()">
            <font-awesome-icon icon="camera"/>
          </button>
          <div v-if="capturing" class="btn-group my-2 ml-auto">
              <button class="btn btn-success" @click="captureVideoImage()">
                  <font-awesome-icon icon="camera"/>&nbsp;Capture
              </button>
              <button
                  class="btn"
                  :class="(item.file || item.dataImage) ? 'btn-danger' : 'btn-secondary disabled'"
                  @click="(item.file || item.dataImage) && closeStream()"
              >
                  <font-awesome-icon icon="stop"/>&nbsp;Abort
              </button>
          </div>
      </div>
      <h6>Editing Item <span class="badge badge-secondary">#{{ item.item_uid }}</span></h6>
      <form>
          <div class="form-group" v-for="field in ['description', 'box']" :key="field">
              <label>{{ field }}</label>
              <input type="text" class="form-control" v-model="item[field]">
          </div>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: ['item'],
  data: () => ({
    capturing: false,
    streaming: false,
    stream: undefined
  }),
  methods: {
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
      this.item.dataImage = canvas.toDataURL('image/png');
      this.closeStream();
    },
    closeStream() {
      if (this.capturing) {
        this.stream.getTracks().forEach(s => s.stop());
        this.capturing = false;
        this.streaming = false;
      }
    }
  },
  mounted() {
    if (!this.item.file)
      this.openStream();
  },
  beforeDestroy() {
    this.closeStream();
  }
};
</script>
