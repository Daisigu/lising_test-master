<template>
  <div>
    <VSpinner v-if="loading"></VSpinner>
    <div class="container mt-5" v-if="!loading">
        <div class="full-size-car-card d-flex">
            <div class="img-car-wrapper col-5 me-5">
                <VCarousel></VCarousel>
            </div>
            <div class="d-flex flex-column">
                <h3>
                    {{ currentCar.mark }} {{ currentCar.model }}
                </h3>
                <h5>Цена: {{ Number(currentCar.price).toLocaleString('ru-RU') }} | Платеж от:
                    {{ (Number((Number(currentCar.price) / 12)).toFixed(0)).toLocaleString('ru-RU') }} Руб. / Мес</h5>
                <p>Двигатель: {{ currentCar.engine }} л.</p>
                <p>Пробег: {{ currentCar.mileage }} км.</p>
                <p>Наличие:
                    <span v-if="currentCar.availability">В наличии</span>
                    <span v-else>Нет в наличии</span>
                </p>
                <button class="btn btn-success align-self-start">Забронировать</button>
            </div>
        </div>
        <VLeasingCalculator class="mt-5" :car="currentCar"></VLeasingCalculator>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import VCarousel from '@/components/v-carousel.vue';
import VSpinner from '@/components/v-spinner.vue'
import VLeasingCalculator from '@/components/v-leasing-calculator.vue';
import axios from 'axios';

export default {
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        ...mapState([
            "currentCar"
        ])
    },
    methods: {

        ...mapMutations([
            'setCurrentCar'
        ]),
        getCurrentCar(_id) {
            if (!(this.loading)) {
                this.loading = true
                axios.get('http://localhost:5000/cars/car/' + _id).then((res) => {
                    this.setCurrentCar(res.data)
                    this.loading = false
                })
            }
        }
    },
    mounted() {

        this.getCurrentCar(this.$route.params.id)
        if (this.currentCar) {
        }
        else {
            this.$router.push('/catalog')
        }
    },
    components: { VCarousel, VLeasingCalculator, VSpinner },

}
</script>

<style  scoped>
.img-car-wrapper img {
    width: 100%;
    height: 100%;
}
</style>