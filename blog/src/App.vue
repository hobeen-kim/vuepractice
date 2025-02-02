<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
        <span class="navbar-text">
        Navbar text with an inline element
      </span>
      </div>
    </div>
  </nav>

  <router-link to="/">홈페이지</router-link>
  <router-link to="/list">리스트페이지</router-link>

  <div class="mt-4">
  <router-view :articles="articles"></router-view>
  </div>

<!--  <List :articles="articles"/>-->

</template>

<script>
import data from "@/assets/blog.js";

export default {
  name : 'App',
  components : {
  },
  data() {
    return {
      articles: data,
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>