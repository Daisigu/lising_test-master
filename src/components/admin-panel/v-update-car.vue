<template>
    <div>
        <div class="d-flex flex-wrap justify-content-around">
            <div class="car-card mb-3 shadow-sm card" style="width: 18rem;" v-for="car in cars" @click="updateCar = car"
                data-bs-toggle="modal" :data-bs-target="'#' + modalId" :key="car._id">
                <img :src="'http://localhost:5000/' + car.photo" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ car.mark }} {{ car.model }}</h5>
                    <p class="card-text">{{ Number(car.price).toLocaleString('ru-RU') }} Руб.</p>
                </div>
            </div>
        </div>


        <!-- Request Modal -->
        <v-modal :header-title-text="'Изменить данные машины'" :target="modalId">
            <template v-slot:body>
                <form class="addcar-form d-flex flex-column">
                    <div class="mb-3">
                        <label for="mark" class="form-label">Марка </label>
                        <input autocomplete="off" v-model="updateCar.mark" type="text" class="form-control" id="mark"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="engine" class="form-label">Обьем двигателя</label>
                        <input autocomplete="off" v-model="updateCar.engine" type="text" class="form-control"
                            id="engine">
                    </div>
                    <div class="mb-3">
                        <label for="engine" class="form-label">Цена</label>
                        <input autocomplete="off" v-model.trim="updateCar.price" type="number" class="form-control"
                            id="engine">
                    </div>
                    <div class="mb-3">
                        <label for="engine" class="form-label">Пробег</label>
                        <input autocomplete="off" v-model="updateCar.mileage" type="text" class="form-control"
                            id="engine">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Модель</label>
                        <input autocomplete="off" v-model="updateCar.model" type="text" class="form-control" id="model">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Год выпуска</label>
                        <input autocomplete="off" v-model="updateCar.year" type="text" class="form-control" id="model">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Трансмиссия</label>
                        <input autocomplete="off" v-model="updateCar.transmission" type="text" class="form-control"
                            id="model">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Кузов</label>
                        <input autocomplete="off" v-model="updateCar.body" type="text" class="form-control" id="model">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Цвет</label>
                        <input autocomplete="off" v-model="updateCar.color" type="text" class="form-control" id="model">
                    </div>
                    <div class="form-check form-switch mb-3">
                        <input class="form-check-input" v-model="updateCar.availability" type="checkbox"
                            id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Наличие</label>
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Фотография</label>
                        <input autocomplete="off" ref="updateCarPhoto" type="file" class="form-control" id="model">
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label">Фотография для карусели</label>
                        <input autocomplete="off" ref="updateCarCaruselPhoto" type="file" multiple="true"
                            class="form-control" id="model">
                    </div>


                </form>
            </template>
            <template v-slot:footer>
                <button class="btn btn-sm btn-warning" @click="deleteCar()">Удалить</button>
                <button data-bs-close="modal" data-bs-dismiss="modal" class="btn btn-sm btn-primary me-2"
                    @click="postUpdateCar()">Сохранить</button>
                <button class="btn btn-sm btn-danger">Закрыть</button>
            </template>
        </v-modal>






    </div>
</template>

<script>
import VModal from '../v-modal.vue';
import { mapMutations, mapState } from 'vuex'
import axios from 'axios';
export default {
    components: {
        VModal
    },
    data() {
        return {
            modalId: 'updateCarModal',
            updateCar: {}
        }
    },
    computed: {
        ...mapState([
            'cars'
        ])
    },
    methods: {
        ...mapMutations([
            'getAllCars'
        ]),
        deleteCar() {
            axios.post('http://localhost:5000/cars/delete/' + this.updateCar._id).then((res) => {
                console.log(res);
            })
        },
        postUpdateCar() {
            const formData = new FormData();
            if (this.updateCar.availability) {
                this.updateCar.availability = 'В наличии'
            }
            else {
                this.updateCar.availability = "Нет в наличии"
            }
            formData.append('_id', this.updateCar._id)
            formData.append('mark', this.updateCar.mark)
            formData.append('engine', this.updateCar.engine)
            formData.append('price', this.updateCar.price)
            formData.append('mileage', this.updateCar.mileage)
            formData.append('availability', this.updateCar.availability)
            formData.append('model', this.updateCar.model)
            formData.append('year', this.updateCar.year)
            formData.append('transmission', this.updateCar.transmission)
            formData.append('body', this.updateCar.body)
            formData.append('color', this.updateCar.color)


            formData.append('photo', this.$refs.updateCarPhoto.files[0])
            for (let i = 0; i < this.$refs.updateCarCaruselPhoto.files.length; i++) {
                formData.append("carouselPhotos", this.$refs.updateCarCaruselPhoto.files[i]);
            }
            axios({
                method: 'post',
                url: 'http://localhost:5000/cars/update',
                data: formData
            }).then((res) => {
                console.log(res);
            })
        }
    },
    mounted() {
        this.getAllCars()
    }
}
</script>

<style lang="scss" scoped>

</style>