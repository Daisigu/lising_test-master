<template>
    <carousel :items-to-show="1" :wrapAround='true'>
      <slide v-for="slide in currentCar.carouselPhotos"  :key="slide">
        <img :src="'http://localhost:5000/'+slide" alt="" width="400">
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>

  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { mapState } from 'vuex';

  export default {
    name: 'v-carousel',
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    computed: {
      ...mapState([
        'currentCar'
      ])
    }
  }
  </script>