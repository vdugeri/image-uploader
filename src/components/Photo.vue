<template>
  <div class="image">
    <img :src="src" alt="image" class="image__photo" />
  </div>
</template>

<script>
export default {
  props: ["src"]
};
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;

.image {
  box-shadow: 0 1rem 3rem rgba($color-black, 0.14);
  &__photo {
    height: 60rem;
    width: auto;
    transition: all 0.3s;
    outline: 4px solid $color-white;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
