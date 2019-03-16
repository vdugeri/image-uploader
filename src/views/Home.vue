<template>
  <div class="home">
    <Navbar />
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
export default {
  name: "home",
  components: {
    Gallery,
    Navbar
  }
};
</script>
