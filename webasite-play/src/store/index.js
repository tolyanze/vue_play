import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    figure: [
      {id: 1, classes: 'circle', color: 'grey'},
      {id: 2, classes: 'triangle', color: 'grey'},
      {id: 3, classes: 'trapezoid', color: 'grey'},
      {id: 4, classes: 'triangle', color: 'grey'},
      {id: 5, classes: 'trapezoid', color: 'grey'},
      {id: 6, classes: 'circle', color: 'grey'},
      {id: 7, classes: 'square', color: 'grey'},
      {id: 8, classes: 'square', color: 'grey'},
      {id: 9, classes: 'segment', color: 'grey'},
      {id: 10, classes: 'segment', color: 'grey'},
      {id: 11, classes: 'moon', color: 'grey'},
      {id: 12, classes: 'moon', color: 'grey'},
    ],
    imagesBg:[
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
      '9.jpg',
      '10.jpg',
    ]
  },
  getters: {
  },
  mutations: {
    yellowBg(state, n){
      state.figure[n].color = 'one'
    },
    greenBg(state, n){
      state.figure[n].color = 'two'
    },
    redBg(state, n){
      state.figure[n].color = 'red'
    },
    deleteBg(state, n){
      state.figure[n].color = 'grey'
    },
    hiddenBg(state, n){
      state.figure[n].display = 'hidden'
    }
  },
  actions: {
  },
  modules: {
  }
})
