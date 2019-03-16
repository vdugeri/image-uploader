<template>
  <div class="upload">
    <Navbar />
    <div class="upload__form">
      <form enctype="multipart/form-data">
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
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { uploadImage } from "@/services/uploadImage";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      preview: ""
    };
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
        await uploadImage(file);
      } catch (ex) {
        console.log(ex.message);
      }
    }
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
      top: -30%;
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

    img {
      width: 40rem;
      height: auto;
    }
  }
}
</style>
