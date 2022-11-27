<template >
    <div class="container mt-5" >
        <div class="d-flex flex-column">
            <h1>Контакты "КРК Лизинг"</h1>
            <h5>
                Адрес головного офиса
            </h5>
            <p>
                ул. Борисова, д. 30, Красноярск, Россия, 660606
            </p>
            <p>
                Понедельник - пятница 9:00 - 18:00
            </p>
        </div>
        <div class="mt-5 d-flex flex-column">
            <h1>Свяжитесь с нами удобным способом</h1>
            <div class="d-flex justify-content-start">
                <div class="card contact-card me-2">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">Отправьте запрос в личном кабинете</h5>
                        <router-link to="/lk" class="btn btn-primary align-self-start">Отправить</router-link>
                    </div>
                </div>
                <div class="card contact-card me-2">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">Закажите обратный звонок</h5>
                        <a data-bs-toggle="modal" data-bs-target="#requestModal"
                            class="btn btn-primary align-self-start">Оставить заявку</a>
                    </div>
                </div>
                <div class="card contact-card me-2">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">Позвоните на горячую линию</h5>
                        <p class="card-text text-primary">+7 913 222 08 73</p>
                    </div>
                </div>
                <div class="card contact-card me-2">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">Напишите нам в мессенджер</h5>
                        <div>
                            <a target="_blank" href="https://t.me/bogd228"
                                class="btn btn-primary align-self-start me-2">Telegram</a>
                            <a href="#" class="btn btn-success align-self-start">Whats-up</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>




        <!-- Request Modal -->
        <v-modal :header-title-text="'Заявка на обратный звонок'" :target="requestModal">
            <template v-slot:body>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Ваше имя</label>
                    <input v-model="requestName" type="text" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Номер телефона</label>
                    <input v-model="requestPhoneNumber" type="phone" class="form-control" id="exampleInputPassword1">
                </div>
            </template>
            <template v-slot:footer>
                <button data-bs-close="modal" data-bs-dismiss="modal" class="btn btn-sm btn-primary me-2"
                    @click="clientRequest([requestName, requestPhoneNumber])">Отправить</button>
                <button class="btn btn-sm btn-danger">Закрыть</button>
            </template>
        </v-modal>








    </div>
</template>

<script>
import vModal from '@/components/v-modal.vue';
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            requestModal: 'requestModal',
            requestName: '',
            requestPhoneNumber: '',
        }
    },
    methods: {
        ...mapMutations([
            'clientRequest'
        ]),

    },
    components: {
        vModal
    }
}
</script>


<style lang="scss" scoped>
.contact-card {
    flex-basis: 24%;
}

.card-body {
    min-height: 170px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }
</style>