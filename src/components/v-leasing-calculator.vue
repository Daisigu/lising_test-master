<template>
    <div>
        <h1>Калькулятор лизинга</h1>

        <div class="d-flex flex-wrap">
            <div class="col-6 d-flex flex-column">
                <small style="font-size:12px" class="p-2">
                    Цена на автомобили определяется автопроизводителями и/или дилерскими центрами самостоятельно и
                    предоставляется ПАО «КРК Лизинг» для заключения договора лизинга, информацию о точной стоимости
                    уточняйте у менеджера "КРК Лизинга".
                </small>
                <div>
                    <div class="input-group d-flex flex-column align-items-center mb-2">
                        <div class="d-flex flex-row align-self-start mb-3 align-items-center">
                            <label for="" class="me-2">Стоимость</label>
                            <input type="text" class="form-control" style="max-width: 200px" v-model="carPrice"><span>
                                &nbsp;₽</span>
                        </div>
                        <div class="d-flex flex-row align-self-start mb-3 col-11">
                            <span>{{ car.price }} </span> &nbsp; <input type="range" v-model="carPrice" class="form-range"
                                id="customRange1" :min="car.price" max="50000000" ref="carPriceInput"> <span
                                class="text-nowrap"> &nbsp; 50 000 000</span>
                        </div>

                    </div>
                    <div class="input-group d-flex flex-column align-items-center mb-2">
                        <div class="d-flex flex-row align-self-start mb-3 align-items-center">
                            <label for="" class="me-2">Срок</label>
                            <input type="text" class="form-control" style="max-width: 100px" v-model="month"><span>
                                &nbsp;мес.</span>
                        </div>
                        <div class="d-flex flex-row align-self-start mb-3 col-11">
                            12 &nbsp; <input type="range" v-model="month" class="form-range" id="customRange1" min="12"
                                max="60">
                            <span class="text-nowrap">
                                &nbsp; 60</span>
                        </div>
                    </div>
                    <div class="input-group d-flex flex-column align-items-center mb-2">
                        <div class="d-flex flex-row align-self-start mb-3 align-items-center">
                            <label for="" class="me-2">Аванс</label>
                            <input type="text" class="form-control" style="max-width: 100px"
                                v-model="prepaymentRub"><span>
                                &nbsp;₽</span> &nbsp;
                            <input type="text" class="form-control" style="max-width: 100px"
                                v-model="prepaymentProcent"><span>
                                &nbsp;%</span>
                        </div>
                        <div class="d-flex flex-row align-self-start mb-3 col-11">
                            0 &nbsp; <input type="range" v-model="prepaymentProcent" class="form-range"
                                id="customRange1" max="50">
                            <span class="text-nowrap">
                                &nbsp; 50</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-row align-items-center justify-content-end">
                    <p class="me-4 align-self-end">Сумма договора лизинга </p>
                    <h1 class="text-danger">{{ leasingSum }} ₽</h1>
                </div>
                <div class="d-flex flex-row align-items-center justify-content-end">
                    <p class="me-4 align-self-end">Итого затраты на приобретение</p>
                    <h1 class="text-danger">{{ expenses }} ₽</h1>
                </div>
                <div class="border">
                    <h4 class="p-3">Ежемесячный платеж: {{ (Number(leasingSum / 12).toFixed(0)).toLocaleString('ru-RU') }} ₽
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            carPrice: '',
            month: '60',
            prepaymentProcent: '50',
        }

    },
    props: {
        car: Object
    },
    computed: {
        prepaymentRub() {
            return (this.carPrice / 100 * this.prepaymentProcent).toFixed(0)
        },
        leasingSum() {
            return (this.carPrice * 1.2 * (this.month / 12) - this.prepaymentRub).toFixed(0)
        },
        expenses() {
            return (this.leasingSum * 0.8).toFixed(0)
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.car.price);
            this.carPrice = this.car.price
        }, 1)

    }
}
</script>

<style lang="scss" scoped>

</style>