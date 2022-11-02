<template>
    <div>
        <form>
            <div class="mb-2">
                <label for="">Тип ТС</label>
                <select name="" id="" class="form-select" v-model="carType">
                    <option value="0">
                        Легковые автомобили
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
                <select name="" id="" class="form-select" v-model="carModel">
                    <option value="0" v-for="model in carMark.models">
                        {{ model }}
                    </option>
                </select>
            </div>
            <div class="mb-2">
                <label for="">Комплектация</label>
                <select name="" id="" class="form-select" v-model="carComplictation">
                    <option value="0">
                        Легковые автомобили
                    </option>
                </select>
            </div>
            <div class="d-flex flex-column">
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

        postFilter() {
            console.log(
                this.carType,
                this.carAviabillity,
                this.carMark,
                this.carModel,
                this.carComplictation
            );
        },
        clearFilters() {
            this.carType = ''
            this.carAviabillity = ''
            this.carMark = ''
            this.carModel = ''
            this.carComplictation = ''
        }
    },
    computed: {

    },
    mounted() {
        this.setFilters()
    }
}
</script>

<style lang="scss" scoped>
.clearFilters {
    cursor: pointer;
}
</style>