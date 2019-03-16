<template>
  <div class="upload">
    <div class="upload__form">
      <button class="upload__button">Upload</button>
      <input
        type="file"
        class="upload__form-file"
        @change="uploadFile"
        name="file"
        accept="image/*"
      />
      <div class="upload__preview">
        <img :src="preview" />
      </div>
      <div class="spinner" v-if="isLoading"></div>
    </div>
  </div>
</template>

<script>
import { uploadImage } from "@/api/uploadImage";
import { saveImage } from "@/api/storeManager";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      preview: "",
      uploading: false
    };
  },
  computed: {
    isLoading() {
      return this.uploading === true;
    }
  },
  methods: {
    async uploadFile() {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) {
        return;
      }

      this.preview = URL.createObjectURL(event.target.files[0]);

      await this.save(files[0]);
    },

    async save(file) {
      try {
        this.uploading = true;
        const data = await uploadImage(file);
        const {
          url,
          public_id,
          created_at,
          format,
          access_mode,
          original_filename
        } = data;

        await saveImage({
          url,
          public_id,
          created_at,
          format,
          access_mode,
          original_filename
        });
      } catch (ex) {
        console.log(ex);
      } finally {
        this.uploading = false;
      }
    },

    ...mapActions({
      fetchPhotos: "fetchPhotos"
    })
  }
};
</script>

<style lang="scss">
$color-white: #fff;
$color-primary: #2196f3;

.upload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  &__button {
    &,
    &:active {
      padding: 1.2rem 3rem;
      font-size: 1.8rem;
      color: $color-white;
      background-color: $color-primary;
      border: 0;
      outline: none;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  &__form {
    margin-top: 2rem;
    position: relative;

    &-file {
      padding: 2rem 3rem;
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      cursor: pointer;
    }
  }

  &__preview {
    width: 50rem;
    margin-top: 1rem;
    padding: 1.5rem;
    border: 1px solid green;
    text-align: center;
    position: relative;

    img {
      width: 40rem;
      height: auto;
    }
  }
}
.spinner {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 35%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
