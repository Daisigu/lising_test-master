<template>
    <div>
        <v-sideback></v-sideback>
        <VSpinner :w="18" :h="18" v-if="currentCarLoading"></VSpinner>
        <div class="container mt-5" v-if="!currentCarLoading">
            <div class="full-size-car-card d-flex">
                <div class="img-car-wrapper col-5 me-5">
                    <VCarousel></VCarousel>
                </div>
                <div class="d-flex flex-column col">
                    <h3>
                        {{ currentCar.mark }} {{ currentCar.model }}
                    </h3>
                    <h5>Цена: {{ Number(currentCar.price).toLocaleString('ru-RU') }} | Платеж
                        <span class="text-warning"> от {{ (Number((Number(currentCar.price) /
                                12)).toFixed(0)).toLocaleString('ru-RU')
                        }} руб. / Мес</span>
                    </h5>
                    <div class="row">
                        <div class="col-6">
                            <p> <span class="description-title">Двигатель:</span> <br />{{ currentCar.engine }} </p>
                            <p> <span class="description-title">Пробег:</span> <br />{{ currentCar.mileage }} </p>
                            <p> <span class="description-title">Наличие:</span> <br /> {{ currentCar.availability }}

                            </p>
                        </div>
                        <div class="col-6">
                            <p> <span class="description-title">Год выпуска:</span> <br /> {{ currentCar.year }} </p>
                            <p> <span class="description-title">Цвет:</span> <br />{{ currentCar.color }} </p>
                            <p> <span class="description-title">Кузов:</span> <br /> {{ currentCar.body }}</p>
                        </div>
                    </div>
                    <button class="btn btn-success align-self-start" data-bs-toggle="modal"
                        :data-bs-target="'#' + bookCarModal">Забронировать</button>
                </div>
            </div>
            <VLeasingCalculator class="mt-5" :car="currentCar"></VLeasingCalculator>
        </div>










        <!-- Book car  Modal -->
        <v-modal :header-title-text="'Заявка на бронирование автомобиля'" :target="bookCarModal">
            <template v-slot:body>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ваше имя</label>
                    <input v-model="requestName" type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Номер телефона</label>
                    <input v-model="requsetPhoneNumber" type="phone" class="form-control" id="exampleInputPassword1">
                </div>
            </template>
            <template v-slot:footer>
                <button data-bs-close="modal" data-bs-dismiss="modal" class="btn btn-sm btn-primary me-2"
                    @click="carClientRequest()">Отправить</button>
                <button class="btn btn-sm btn-danger">Закрыть</button>
            </template>
        </v-modal>











    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import VCarousel from '@/components/v-carousel.vue';
import VSpinner from '@/components/UI-elements/v-spinner-full.vue'
import VLeasingCalculator from '@/components/v-leasing-calculator.vue';
import axios from 'axios';
import VSideback from '@/components/v-sideback.vue';
import vModal from '@/components/v-modal.vue';

export default {
    data() {
        return {
            currentCarLoading: false,
            requestName: '',
            requsetPhoneNumber: '',
            bookCarModal: 'bookCarModal'
        }
    },
    computed: {
        ...mapState([
            "currentCar"
        ])
    },
    methods: {
        ...mapMutations([
            'setCurrentCar'
        ]),
        getCurrentCar(_id) {
            if (!(this.currentCarLoading)) {
                this.currentCarLoading = true
                axios.get('http://localhost:5000/cars/car/' + _id).then((res) => {
                    this.setCurrentCar(res.data)
                    this.currentCarLoading = false
                })
            }
        },
        carClientRequest() {
            let tg = {
                token: "5640775860:AAHGUG0ktr91Y6bjj8knbP7nkIdHCX89cNo",
                chat_id: "676402625"
            }
            const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request
            const obj = {
                chat_id: tg.chat_id, // Telegram chat id
                text: '📩 Заявка по машине: \n' + this.currentCar.mark + ' ' + this.currentCar.model + '\n' + '👤 Имя: \n' + this.requestName + '\n' + '📞 Номер телефона:\n' + this.requsetPhoneNumber
            };
            const xht = new XMLHttpRequest();
            xht.open("POST", url, true);
            xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
            xht.send(JSON.stringify(obj));

        },
    },
    mounted() {

        this.getCurrentCar(this.$route.params.id)
        if (this.currentCar) {
        }
        else {
            this.$router.push('/catalog')
        }
    },
    components: { VCarousel, VLeasingCalculator, VSpinner, VSideback, vModal },

}
</script>

<style  scoped>
.img-car-wrapper img {
    width: 100%;
    height: 100%;
}

.description-title {
    font-weight: 900;
}
</style>