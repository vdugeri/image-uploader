<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700");

html {
  font-family: "Lato", sans-serif;
  font-size: 64.5%;
  font-weight: 400;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
