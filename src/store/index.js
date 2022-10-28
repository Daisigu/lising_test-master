import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    isAuth: false,
    cars: [],
    currentCar: {},
    isAuth: false,
  },
  getters: {
  },
  mutations: {
    setCurrentCar(state, value) {
        state.currentCar = value
    },
    setAuthTrue(state){
      state.isAuth=true
    },
    setAuthFalse(state){
      state.isAuth=false
    },
    getAllCars(state){
      axios.get('http://localhost:5000/cars/getAll').then((res)=>{
        state.cars=res.data
      })
    }
  },
  actions: {
    setCurrentCar({ commit, value }) {
      commit('setCurrentCar', value)
    },
    setAuthTrue({commit}){
      commit('setAuthTrue')
    },
    setAuthFalse({commit}){
      commit('setAuthFalse')
    },
    getAllCars({commit}){
      commit('getAllCars')
    }
  },
  modules: {
  }
})
