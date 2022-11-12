<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success bg-gradient">
      <div class="container d-flex justify-content-between">
        <a href="https://webasite.ru" class="brand">
          <img style="max-width: 70px;" src="@/assets/img/Logo.png" alt="Logo">
        </a>
        <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="">☰</span>
        </button> -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="col-12 d-flex justify-content-end px-0">
            <ul class="navbar-nav ">
              <li class="mx-1"><router-link to="/">Игра 1</router-link></li>
              <li class="mx-1"><router-link to="/PlayTwo">Игра 2</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  <!-- <router-view/> -->
</template>

<script>
export default {
  name:"Header"
}
</script>
<style lang="scss">
  .collapse {
    &:not(.show) {
      display: none;
    }
  }
  .collapsing {
    height: 0;
    overflow: hidden;
  }
</style>