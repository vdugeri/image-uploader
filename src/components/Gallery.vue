<template>
  <div class="gallery">
    <Photo v-for="pic in photos" :key="pic.id" :src="pic.url" />
  </div>
</template>

<script>
import Photo from "@/components/Photo";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Photo
  },
  mounted() {
    this.fetchPhotos();
  },
  computed: {
    ...mapState({
      photos: state => state.photos
    })
  },
  methods: {
    ...mapActions({
      fetchPhotos: "fetchPhotos"
    })
  }
};
</script>

<style lang="scss">
.gallery {
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 1rem;
}
</style>
