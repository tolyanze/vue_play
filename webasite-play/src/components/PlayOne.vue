<template>
  <div class="container">
    <div id="bg-images" :style="generator"></div>
    <div class=" my-5">
      <div class="progress">
        <div class="progress-bar " :class="bg" role="progressbar" aria-label="Warning example" :style="`width: ${percent}%`" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <div class="row">
      <div 
        v-for="(item, index) in randomList" 
        class=" col-sm-4" 
        :class="item.display"
        :key="index"
      >
        <div class="card-body">
          <div 
          class="card-body--item" 
          :class="item.color"
          @click="choosing(index, item.classes)"
          >
            <PlayCard 
            :class="[item.classes]"
            >
            </PlayCard>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <button type="button" class="mt-5 btn btn-success" @click="reset">начать заново</button>
    </div>
  </div>
</template>
<script>
import PlayCard from '@/components/ui/PlayCard.vue'
  export default {
    name: 'PlayOne',
    components: {
      PlayCard
    },
    data() {
      return {
        bg:'bg-danger',
        percent: 0,
        fig:'',
        arrBox: [],
        opacity: 0.1,
      }
    },  
    methods: {
      reset(){
        this.$router.go(0);
      },
      choosing(n, x){
        if(!this.fig && !this.arrBox.includes(n)){
          this.fig = x
          this.$store.commit(`yellowBg`, n)
          this.arrBox.push(n)
          console.log(this.arrBox)
          console.log(n)
        }else if(this.fig == x && !this.arrBox.includes(n)){
          this.arrBox.push(n)
          this.arrBox.forEach(x => this.$store.commit(`greenBg`, x))
          this.arrBox.forEach(x => this.$store.commit(`hiddenBg`, x))
          this.fig = ''
          this.percent = (this.arrBox.length/this.$store.state.figure.length)*100
          if(this.percent > 25 && this.percent < 50 ){
            this.bg = 'bg-warning'
            this.opacity = 0.2
          }else if(this.percent > 50 && this.percent < 100){
            this.bg = 'bg-success'
            this.opacity = 0.3
          }else if(this.percent == 100){
            this.opacity = 1
          }
          console.log(this.arrBox)
          console.log(n)
        }else{
          if(!this.arrBox.includes(n)){
            this.$store.commit(`redBg`, n)
            setTimeout(() => {
              this.$store.commit('deleteBg', n)
            }, 1500);
          }else{
            console.log('Повтор')
          }
          console.log(this.arrBox)
          console.log(n)
        }
      }
    },
    computed: {
      bgImage(){
        const number = Math.floor(Math.random() * this.$store.state.imagesBg.length)
        const img = this.$store.state.imagesBg[number]
        return require(`@/assets/img/${img}`)
      },
      generator(){
        return {backgroundImage: `url(${this.bgImage})`, opacity: this.opacity}
      },
      randomList(){
        return this.$store.state.figure.sort(()=>Math.random()-0.5)
      },
    },
    created() {
      
    },
  }
</script>
<style>
#bg-images{
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  max-height: 100%;
  background-position: 0 20px;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 1s;
}
@media (max-width: 1300px) {
  #bg-images{
    max-width: 90%;
    background-position: 0 20px;
  }
}
.card-body--item{
  display: inline-block;
  padding: 20px;
  border: 5px solid #bbb9b933;
  border-radius: 10px;
}
.grey{
  border: 5px solid #bbb9b933;
}
.one{
  border: 5px solid #f5e236;
}
.red{
  position:relative;
  animation: dws-bounce 1.5s linear 1;
}
.two{
  border: 5px solid #06dd2a;
}
.hidden{
  /* display: none;   */
  opacity: 0; 
}
@keyframes dws-bounce {
  0% { margin: 0 -30px 0 0;border: 5px solid #ec4511; animation-timing-function: ease-in;}
  10% { margin: 0 0 0 -30px; animation-timing-function: ease-in;}
  20% { margin: 0 -20px 0 0; animation-timing-function: ease-in;}
  30% { margin: 0 0 0 -20px; animation-timing-function: ease-in;}
  40% { margin: 0 -15px 0 0; animation-timing-function: ease-in;}
  50% { margin: 0 0 0 -15px; animation-timing-function: ease-in;}
  60% { margin: 0 -10px 0 0; animation-timing-function: ease-in;}
  70% { margin: 0 0 0 -10px; animation-timing-function: ease-in;}
  80% { margin: 0 -5px 0 0; animation-timing-function: ease-in;}
  90% { margin: 0  0 0 -5px; animation-timing-function: ease-in;}
  100% { margin: 0 0 0 0; border: 5px solid #bbb9b933; animation-timing-function: ease-in;}
}
</style>