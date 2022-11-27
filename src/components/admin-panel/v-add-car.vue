<template>
    <div>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCarModal">
            Добавить машину
        </button>
        <div class="modal fade" id="addCarModal" tabindex="-1" aria-labelledby="addCarModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCarModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="addcar-form d-flex flex-column">
                            <div class="mb-3">
                                <label for="mark" class="form-label">Марка </label>
                                <input autocomplete="off" v-model="mark" type="text" class="form-control" id="mark"
                                    aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="engine" class="form-label">Обьем двигателя</label>
                                <input autocomplete="off" v-model="engine" type="text" class="form-control" id="engine">
                            </div>
                            <div class="mb-3">
                                <label for="engine" class="form-label">Цена</label>
                                <input autocomplete="off" v-model.trim="price" type="number" class="form-control"
                                    id="engine">
                            </div>
                            <div class="mb-3">
                                <label for="engine" class="form-label">Пробег</label>
                                <input autocomplete="off" v-model="mileage" type="text" class="form-control"
                                    id="engine">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Модель</label>
                                <input autocomplete="off" v-model="model" type="text" class="form-control" id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Год выпуска</label>
                                <input autocomplete="off" v-model="year" type="text" class="form-control" id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Трансмиссия</label>
                                <input autocomplete="off" v-model="transmission" type="text" class="form-control"
                                    id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Кузов</label>
                                <input autocomplete="off" v-model="body" type="text" class="form-control" id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Цвет</label>
                                <input autocomplete="off" v-model="color" type="text" class="form-control" id="model">
                            </div>
                            <div class="form-check form-switch mb-3">
                                <input class="form-check-input" v-model="availability" type="checkbox"
                                    id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Наличие</label>
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Фотография</label>
                                <input autocomplete="off" ref="carPhoto" type="file" class="form-control" id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Фотография для карусели</label>
                                <input autocomplete="off" ref="carCaruselPhoto" type="file" multiple="true"
                                    class="form-control" id="model">
                            </div>


                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary" @click="addCar()"
                            data-bs-dismiss="modal">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            mark: '',
            engine: '',
            price: '',
            mileage: '',
            availability: false,
            model: '',
            year: '',
            transmission: '',
            body: '',
            color: '',
        }
    },
    methods: {

        async addCar() {
            const formData = new FormData();
            if (this.availability) {
                this.availability = 'В наличии'
            }
            else {
                this.availability = "Нет в наличии"
            }
            formData.append('mark', this.mark)
            formData.append('engine', this.engine)
            formData.append('price', this.price)
            formData.append('mileage', this.mileage)
            formData.append('availability', this.availability)
            formData.append('model', this.model)
            formData.append('year', this.year)
            formData.append('transmission', this.transmission)
            formData.append('body', this.body)
            formData.append('color', this.color)


            formData.append('photo', this.$refs.carPhoto.files[0])
            for (let i = 0; i < this.$refs.carCaruselPhoto.files.length; i++) {
                formData.append("carouselPhotos", this.$refs.carCaruselPhoto.files[i]);
            }
            const res = await axios({
                method: 'post',
                url: 'http://localhost:5000/cars/create',
                data: formData
            })
            console.log(res);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>