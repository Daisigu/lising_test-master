import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    cars: [
      {
        title: 'Lada Granta лифтбек Comfort 1.6 106hp 5MT ',
        price: '950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '25км',
        availability: 'В наличии',
        id: 1,
        img: require('@/assets/cars/1.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Hyundai Solaris Active Plus 1.4 6MT ',
        price: '950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '35км',
        availability: 'В наличии',
        id: 2,
        img: require('@/assets/cars/2.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Renault Logan Stepway Life 1.6 MT5 ',
        price: '950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '45км',
        availability: 'В наличии',
        id: 3,
        img: require('@/assets/cars/3.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Hyundai Solaris 1.4 Active Fleet auto ',
        price: '3950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '55км',
        availability: 'В наличии',
        id: 4,
        img: require('@/assets/cars/4.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' SKODA Rapid 1.6 90Hp Ambition ',
        price: '350000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '65км',
        availability: 'В наличии',
        id: 5,
        img: require('@/assets/cars/5.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Citroen C4 Седан Feel VTi 115 AT ',
        price: '850000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '75км',
        availability: 'В наличии',
        id: 6,
        img: require('@/assets/cars/6.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Renault Kaptur Drive 1.6 CVT 4х2 ',
        price: '2950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '85км',
        availability: 'В наличии',
        id: 7,
        img: require('@/assets/cars/1.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 8,
        img: require('@/assets/cars/2.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 9,
        img: require('@/assets/cars/3.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 10,
        img: require('@/assets/cars/4.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 11,
        img: require('@/assets/cars/5.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 12,
        img: require('@/assets/cars/6.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 13,
        img: require('@/assets/cars/1.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 14,
        img: require('@/assets/cars/2.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 15,
        img: require('@/assets/cars/3.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
      {
        title: ' Kia K5 Classic 2.0 6AT ',
        price: '1950000',
        engine: 'Объем 1,6 л., Бензин 106 л.с.',
        mileage: '95км',
        availability: 'В наличии',
        id: 16,
        img: require('@/assets/cars/4.jpg'),
        carouselImages: [
          require('@/assets/cars/1.jpg'),
          require('@/assets/cars/2.jpg'),
          require('@/assets/cars/3.jpg'),
          require('@/assets/cars/4.jpg'),
    ] 
      },
    ],
    currentCar: {},
    isAuth: false,
  },
  getters: {
  },
  mutations: {
    getCurrentCar(state, id) {
      state.currentCar = state.cars.find(car => car.id == id)
    },
    setAuthTrue(state){
      state.isAuth=true
    },
    setAuthFalse(state){
      state.isAuth=false
    }
  },
  actions: {
    getCurrentCar({ commit, id }) {
      commit('getCurrentCar', id)
    },
    setAuthTrue({commit}){
      commit('setAuthTrue')
    },
    setAuthFalse({commit}){
      commit('setAuthFalse')
    }
  },
  modules: {
  }
})
