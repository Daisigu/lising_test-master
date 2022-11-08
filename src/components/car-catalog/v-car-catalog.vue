<template>
    <div class="d-flex flex-column">
        <router-link :to="'/car/' + car._id" class="car-card col-12 d-flex flex-row" v-for="car in cars" :key="car._id">
            <img :src="'http://localhost:5000/' + car.photo" class="car-img" alt="...">
            <div class="w-100">
                <h5 class="car-title">{{ car.mark }} {{ car.model }}</h5>
                <div class="d-flex flex-row col-12 justify-content-between">
                    <div class="d-flex flex-row">
                        <div class="me-5">
                            <div>
                                <span class="description-text-left">Год выпуска:</span> <span
                                    class="description-text-right"> {{ car.year }}</span>
                            </div>
                            <div>
                                <span class="description-text-left">Двигатель:</span> <span
                                    class="description-text-right">{{ car.engine }}</span>
                            </div>
                            <div>
                                <span class="description-text-left">Наличие:</span> <span
                                    class="description-text-right">{{ car.availability }}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span class="description-text-left">Трансмиссия:</span> <span
                                    class="description-text-right">{{ car.transmission }}</span>
                            </div>
                            <div>
                                <span class="description-text-left">Кузов:</span> <span
                                    class="description-text-right">{{ car.body }}</span>
                            </div>
                            <div>
                                <span class="description-text-left">Цвет:</span> <span class="description-text-right">{{
                                        car.color
                                }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 d-flex flex-column">
                        <h5 class="price align-self-start">{{ Number(car.price).toLocaleString('ru-RU') }} руб.</h5>
                        <p>Платеж от {{ ((car.price / 74).toFixed(0)).toLocaleString('ru-RU') }} руб.</p>
                    </div>
                </div>

            </div>
        </router-link>
        <div ref="observer"></div>
        <v-spinner v-if="carsLoading" class="align-self-center mt-2 mb-2"></v-spinner>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

import vSpinner from '../UI-elements/v-spinner.vue';


import axios from 'axios';
export default {
    data() {
        return {
            page: 0,
            cars: [],
            carsLoading: false,
            limit: false,

        }
    },
    components: {
        vSpinner
    },
    computed: {
    },
    methods: {

        ...mapMutations([
            'getCurrentCar',
            'getAllCars'
        ]),
        getLimitCars(page) {
            if (!this.limit && !this.carsLoading) {
                this.carsLoading = true
                axios.post("http://localhost:5000/cars/getLimit?page=" + page).then((res) => {
                    this.cars = [...this.cars, ...res.data];
                    if (res.data.length < 7) {
                        this.limit = true
                    }
                }).then(() => {
                    this.page++
                    this.carsLoading = false
                })
            }
        }
    },
    mounted() {
        setTimeout(() => {
            const options = {
                rootMargin: '10px',
                threshold: 1.0
            }
            const callback = (entries, observer) => {
                if (entries[0].isIntersecting) {
                    console.log(123);
                    this.getLimitCars(this.page)
                }
            };
            const observer = new IntersectionObserver(callback, options)
            observer.observe(this.$refs.observer);
        }, 1)
    }
}
</script>

<style scoped>
.car-card {
    height: 150px;
    padding: 5px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-bottom: 5px;
    border-bottom: 1px solid rgb(204, 204, 204);
}

.car-card:hover .car-title {
    color: coral;

}

.car-card:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease;
}

.car-img {
    border-radius: 5px;
    margin-right: 5px;
    width: 200px;
}

.price {
    padding: 5px;
    background: rgb(236, 236, 236);
}

.description-text-right {
    color: black;
    font-weight: 500;
}

.description-text-left {
    color: gray;
    font-size: 14px;
}
</style>