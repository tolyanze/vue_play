<template>
      <div @click="$emit('editColor')"></div>
</template>
<script>
export default {
  name:'PlayCard',
  computed: {
  }
}
</script>
<style lang="scss">
$color: #4faaf5;

  .circle{
    width: 100px; 
    height: 100px;
    background: $color;
    border-radius: 50%;
    margin: 0 auto;
    cursor:pointer;
  }
  .triangle{
    width: 0; 
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid $color;
    margin: 0 auto;
    cursor:pointer;
  }
  .trapezoid{
    height: 0; 
    width: 100px;
    border-bottom: 100px solid $color;
    border-left: 0px solid transparent;
    border-right: 25px solid transparent;
    margin: 0 auto;
    cursor:pointer;
  }
  .square{
    width: 100px; 
    height: 100px;
    background: $color;
    margin: 0 auto;
    cursor:pointer;
  }
  .segment{
    width: 0; 
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid $color;
    border-radius: 50%;
  }
  .moon{
    width: 100px; 
    height: 100px; 
    margin: -20px 0 20px 0;
    border-radius: 50%;
    box-shadow: 15px 15px 0 0 $color;
  }
</style>