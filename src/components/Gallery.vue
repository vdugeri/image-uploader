<template>
  <div class="gallery">
    <Photo :src="pic" />
    <Photo :src="pic" />
    <Photo :src="pic" />
    <Photo :src="pic" />
    <Photo :src="pic" />
    <Photo :src="pic" />
  </div>
</template>

<script>
import pic from "@/assets/image.jpg";
import Photo from "@/components/Photo";

export default {
  components: {
    Photo
  },
  data() {
    return {
      pic
    };
  }
};
</script>

<style lang="scss">
.gallery {
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
}
</style>
