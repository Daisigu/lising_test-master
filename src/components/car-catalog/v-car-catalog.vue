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
            carsLoading: false,
            limit: 10,
            pageLimit: 0,
        }
    },
    components: {
        vSpinner
    },
    computed: {
        ...mapState([
            'cars'
        ])
    },
    methods: {

        ...mapMutations([
            'getCurrentCar',
            'setCars'
        ]),
        async getLimitCars() {
            if (this.page <= this.pageLimit) {
                this.carsLoading = true
                const res = await axios({
                    method: 'post',
                    url: 'http://localhost:5000/cars/getLimit',
                    data: {
                        page: this.page,
                        limit: this.limit,
                    }
                })
                this.setCars([...this.cars, ...res.data.cars])
                this.carsLoading = false
                this.page++
                this.pageLimit = Math.ceil(res.data.limit / this.limit)
            }
        }
    },
    mounted() {
        const options = {
            rootMargin: '10px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                this.getLimitCars()
            }
        };
        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer);
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