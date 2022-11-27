<template>
    <div>
        <form>
            <div class="mb-2">
                <label for="">Тип ТС</label>
                <select name="" id="" class="form-select" v-model="carType">
                    <option value="0">
                        Легковые автомобили
                    </option>
                    <option value="1">
                        Грузовой автомобиль
                    </option>
                </select>
            </div>

            <div class="form-check mb-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="carAviabillity">
                <label class="form-check-label" for="flexCheckChecked">Автомобили в наличии</label>
            </div>
            <div class="mb-2">
                <label for="">Марка</label>
                <select name="" id="" class="form-select" v-model="carMark" @change="test = filter">
                    <option :value="filter" v-for="filter, index in filters">
                        {{ filter.mark }}
                    </option>
                </select>
            </div>
            <div class="mb-2">
                <label for="">Модель</label>
                <select :disabled="!carMark.mark" name="" id="" class="form-select" v-model="carModel">
                    <option :value="model" v-for="model in carMark.models">
                        {{ model }}
                    </option>
                </select>
            </div>
            <div class="d-flex flex-column mt-4">
                <button type="button" class="btn btn-primary mb-2" @click="postFilter()">Показать</button>
                <p class="text-center clearFilters" @click="clearFilters()">Очистить все</p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            carType: '',
            carAviabillity: '',
            carMark: '',
            carModel: '',
            carComplictation: '',
            filters: [],
        }
    },
    methods: {
        setFilters() {
            axios.get('http://localhost:5000/cars/filters').then((res) => {
                this.filters = res.data
            })
        },

      async postFilter() {
          const res = await  axios({
                method: 'post',
                url: 'http://localhost:5000/cars/filterCars',
                data: {
                    carType: this.carType,
                    carAviabillity: this.carAviabillity,
                    carMark: this.carMark,
                    carModel: this.carModel
                }
            })
            console.log(res);
        },
        clearFilters() {
            this.carType = ''
            this.carAviabillity = ''
            this.carMark = ''
            this.carModel = ''
        }
    },
    mounted() {
        this.setFilters()
    }
}
</script>

<style scoped>
.clearFilters {
    cursor: pointer;
}
</style>