<template>
    <div class="container mt-5">
        <h1>Каталог автомобилей</h1>
       <!--  <div class="d-flex flex-wrap justify-content-around">
            <router-link :to="'/car/' + car._id" class="car-card mb-3 shadow-sm card" style="width: 18rem;"
                v-for="car in cars" :key="car._id">
                <img :src="'http://localhost:5000/' + car.photo" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ car.mark }} {{ car.model }}</h5>
                    <p class="card-text">{{ Number(car.price).toLocaleString('ru-RU') }} Руб.</p>
                </div>
            </router-link>
        </div> -->
        <div class="d-flex flex-column">
            <router-link :to="'/car/' + car._id" class="test col-12 d-flex flex-row" v-for="car in cars" :key="car._id">
                <img :src="'http://localhost:5000/' + car.photo" class="test-img" alt="...">
                <div class="w-100">
                    <h5 class="car-title">{{ car.mark }} {{ car.model }}</h5>
                    <div class="d-flex flex-row col-12 justify-content-between">
                        <div class="d-flex flex-row">
                            <div class="me-5">
                                <div>
                                    <span class="description-text-left">Год выпуска:</span> <span class="description-text-right"> 2022</span>
                                </div>
                                <div>
                                    <span class="description-text-left">Двигатель:</span> <span class="description-text-right">{{ car.engine }}</span>
                                </div>
                                <div>
                                    <span class="description-text-left">Наличие:</span> <span class="description-text-right">В наличии</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span class="description-text-left">Трансмиссия:</span> <span class="description-text-right">МКПП, Передний привод</span>
                                </div>
                                <div>
                                    <span class="description-text-left">Кузов:</span> <span class="description-text-right">Лифтбэк, 5дв.</span>
                                </div>
                                <div>
                                    <span class="description-text-left">Цвет:</span> <span class="description-text-right">Серый</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 d-flex flex-column">
                            <h5 class="price align-self-start">{{Number(car.price).toLocaleString('ru-RU')}} руб.</h5>
                            <p>Платеж от {{((car.price/74).toFixed(0)).toLocaleString('ru-RU')}} руб.</p>
                        </div>
                    </div>

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
    mounted() {
        this.getAllCars()
    }
}
</script>

<style scoped>
.car-card:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease;
}

.test {
    height: 150px;
    padding: 5px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(204, 204, 204);
}
.test:hover .car-title{
    color: coral;
}
.test:hover{
    cursor: pointer;
}

.test-img {
    border-radius: 5px;
    margin-right: 5px;
    width: 200px;
}
.price{
    padding: 5px;
    background: rgb(236, 236, 236);
}
.description-text-right{
    color: black;
    font-weight: 500;
}
.description-text-left{
    color: gray;
}
</style>