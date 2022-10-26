<template>
    <div class="container mt-5">
        <h1>Админка</h1>
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
                                <input autocomplete="off" v-model="mark" type="email" class="form-control"
                                    id="mark" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3">
                                <label for="engine" class="form-label">Обьем двигателя</label>
                                <input autocomplete="off" v-model="engine" type="text" class="form-control"
                                    id="engine">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Модель</label>
                                <input autocomplete="off" v-model="model" type="text" class="form-control"
                                    id="model">
                            </div>
                            <div class="mb-3">
                                <label for="model" class="form-label">Фотография</label>
                                <input autocomplete="off" ref="carPhoto" type="file" class="form-control"
                                    id="model">
                            </div>


                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" class="btn btn-primary" @click="addCar()">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            mark: '',
            engine: '',
            model: '',
        }
    },
    methods: {
        addCar(){
            const formData = new FormData();
            formData.append('mark' , this.mark)
            formData.append('engine' , this.engine)
            formData.append('model' , this.model)
            formData.append('photo' , this.$refs.carPhoto.files[0])

           axios({
            method: 'post',
            url: 'http://localhost:5000/test/cars',
            data: formData
           }).then((res)=>{
            console.log(res);
           })
        }  
    },
}
</script>

<style scoped>
</style>