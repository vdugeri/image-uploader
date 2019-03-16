<template>
  <section class="navbar">
    <ul class="navbar__nav">
      <li class="navbar__nav-item">
        <router-link to="/upload">Upload</router-link>
      </li>
      <li class="navbar__nav-item">
        <router-link to="/about">About</router-link>
      </li>
      <li class="navbar__nav-item">
        <router-link to="/">Home</router-link>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
$color-black: #000;
$color-white: #fff;
$color-primary: #2196f3;
.navbar {
  font-size: 1.8rem;
  font-weight: 300;
  width: 100vw;
  height: 8vh;
  letter-spacing: 0.2rem;
  box-shadow: 0 1rem 3rem rgba($color-black, 0.14);
  background: $color-primary;
  margin-bottom: 2rem;
  &__nav {
    list-style: none;
    padding: 1rem;
    float: right;
  }

  &__nav-item {
    display: block;
    margin-right: 2rem;
    float: right;
    text-align: center;

    a:link,
    a:visited {
      text-decoration: none;
      color: $color-white;
      text-transform: uppercase;
    }
  }
}
</style>
