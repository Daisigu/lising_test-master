<template>
    <div class="container mt-5" v-if="currentCar">
        <div class="full-size-car-card d-flex">
           <div class="img-car-wrapper col-5 me-5">
            <VCarousel></VCarousel>
           </div>
          <div class="d-flex flex-column">
            <h3>
            {{currentCar.title}}
           </h3>
           <h5>Цена: {{Number(currentCar.price).toLocaleString('ru-RU')}} | Платеж от: {{(Number((Number(currentCar.price)/12)).toFixed(0)).toLocaleString('ru-RU') }} Руб. / Мес</h5>
           <p>Двигатель: {{currentCar.engine}}</p>
           <p>Пробег: {{currentCar.mileage}}</p>
           <p>Наличие: {{currentCar.availability}}</p>
           <button class="btn btn-success align-self-start">Забронировать</button>
          </div>
        </div>
        <VLeasingCalculator class="mt-5" :car="currentCar"></VLeasingCalculator>

    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import VCarousel from '@/components/v-carousel.vue';
import VLeasingCalculator from '../components/v-leasing-calculator.vue';

    export default {
    computed: {
        ...mapState([
            "currentCar"
        ])
    },
    methods: {
        ...mapMutations([
            'getCurrentCar'
        ])
    },
    mounted(){
        
        this.getCurrentCar(this.$route.params.id)
        if(this.currentCar){
            console.log(this.currentCar);
        }
        else
        {
          this.$router.push('/catalog')
        }
    },
    components: { VCarousel, VLeasingCalculator },
   
}
</script>

<style  scoped>
    .img-car-wrapper img{
        width: 100%;
        height: 100%;
    }
</style>