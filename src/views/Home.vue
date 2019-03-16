<template>
  <div class="home">
    <Navbar />
    <Uploader />
    <Gallery />
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Uploader from "@/components/Upload";
export default {
  name: "home",
  components: {
    Gallery,
    Navbar,
    Uploader
  }
};
</script>
