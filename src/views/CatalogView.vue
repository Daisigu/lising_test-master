<template>
    <div class="container mt-5">
        <h1>Каталог автомобилей</h1>
        <div class="d-flex flex-wrap justify-content-around">
            <router-link :to="'/car/'+car._id" class="car-card mb-3 shadow-sm card" style="width: 18rem;" v-for="car in cars" :key="car._id">
                    <img :src="'http://localhost:5000/'+car.photo" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{car.mark}}  {{car.model}}</h5>
                        <p class="card-text">{{Number(car.price).toLocaleString('ru-RU')}} Руб.</p>
                    </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    computed: {
        ...mapState([
            'cars'
        ])
    },
    methods: {
        ...mapMutations([
            'getCurrentCar',
            'getAllCars'
        ])
    },
    mounted(){
        this.getAllCars()
    }
}
</script>

<style scoped>
    .car-card:hover{
        opacity: 0.8;
        cursor: pointer;
        transition: all 0.3s ease;
    }
</style>