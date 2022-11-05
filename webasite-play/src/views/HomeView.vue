<template>
  <div class="home">
    <PlayOne></PlayOne>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayOne from '@/components/PlayOne.vue'

export default {
  name: 'HomeView',
  components: {
    PlayOne
  }
}
</script>
