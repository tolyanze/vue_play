<template>
  <div class="container my-5">
    <div class=" my-5">
      <div class="progress">
        <div class="progress-bar " :class="bg" role="progressbar" aria-label="Warning example" :style="`width: ${percent}%`" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <div class="row block">
      <div class="block--img">
        <img :src="bgImage" :style="generator" alt="">
      </div>
      <div  
        v-for="(item, index) in randomList" 
        class=" col-4" 
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
      <button type="button" class="btn btn-warning btn-reset " @click="reset">
        <span class="text-white">&#8635;</span>
      </button>
      <div>
        <img class="dinamic" @click="startAudio" src="@/assets/img/dinamic.png" alt="dinamic">
        <audio id="audio" src="mp3/play.mp3" autoplay></audio>
      </div>
    </div>
  </div>
</template>
<script>
import PlayCard from '@/components/ui/PlayCard.vue'
  export default {
    name: 'PlayOne',
    components: {
      PlayCard,
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
      startAudio() {
        const audio = document.querySelector("#audio");
        // const dinamic = document.querySelector(".dinamic");
        if(audio.paused){
          audio.play()
          // dinamic.classList.add('animate--pulse')
        }else{
          audio.pause()
          // dinamic.classList.remove('animate--pulse')
        }
      },
      reset(){
        this.$router.go(0);
      },
      choosing(n, x){
        if(!this.fig && !this.arrBox.includes(n)){
          this.fig = x
          this.$store.commit(`yellowBg`, n)
          this.arrBox.push(n)
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
        }else{
          if(!this.arrBox.includes(n)){
            this.$store.commit(`redBg`, n)
            setTimeout(() => {
              this.$store.commit('deleteBg', n)
            }, 1500);
          }else{
            console.log('Повтор')
          }
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
        return {opacity: this.opacity}
      },
      randomList(){
        return this.$store.state.figure.sort(()=>Math.random()-0.5)
      },
    },
    mounted() {
    },
  }
</script>
<style lang="scss">
  .btn-reset{
    position: fixed;
    bottom: 50px;
    right: 20px;
    width: 50px!important;
    height: 50px;
    border-radius: 50px!important;
    display: flex!important;
    align-items: center;
    cursor:pointer;
    span{
      font-size: 2rem;
      transition: 0.5s ease-in-out;
    }
    span:hover{
      font-size: 2rem;
      transform: rotate(360deg);
    }
  }
.dinamic{
  position: fixed;
  bottom: 50px;
  left: 20px;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  background: #ffc720;
  cursor:pointer;
}
.dinamic:hover{
  background: #f5d268;
  padding: 12px;
}
.animate--pulse{
  animation: pulse .5s infinite ease-in-out;
}
.block{
  position:relative;
  &--img{
    display: inherit;
    position: absolute;
    max-height: 100%;
    z-index: -1;
    img{
      max-width: 100%;
      border-radius: 15px;
      transition: 0.3s;
    }
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
@keyframes pulse{
  0% { padding: 10px;}
  50% { padding: 12px;}
  100% { padding: 10px;}
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