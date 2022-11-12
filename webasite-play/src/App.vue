<template>
  <Header></Header>
  <router-view/>
  <Footer></Footer>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e1720;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #FECE1A;

    &.router-link-exact-active {
      color: #ffffff;
    }
    &:hover{
      color:#ffffff
    }
  }
}
</style>
