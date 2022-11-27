<template>
    <div id="container" class="mt-5">
        <h1>Каталог автомобилей</h1>
        <div class="d-flex flex-column">
            <router-link :to="'/car/' + car._id" class="car-card col-12 d-flex flex-row" v-for="car in cars"
                :key="car._id">
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
                                    <span class="description-text-left">Цвет:</span> <span
                                        class="description-text-right">{{ car.color }}</span>
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
        </div>
      <div class="row">
        <v-car-catalog class="col-10"></v-car-catalog>
        <v-catalog-filter class="col-2"></v-catalog-filter>
      </div>
    </div>
</template>

<script>
import vCarCatalog from '@/components/car-catalog/v-car-catalog.vue';
import vCatalogFilter from '@/components/car-catalog/v-catalog-filter.vue';
export default {
    components: {
        vCarCatalog, vCatalogFilter
    }
}
</script>

<style scoped>
#container {
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>