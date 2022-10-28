<template>
  <div>
    <div class="home-header-background container-fluid">
      <div class="d-flex flex-column container">
        <div class="col-7">
          <h1>Лизинг для юридических лиц и индивидуальных предпринимателей</h1>
          <p>
            Выберите программу финансирования автотранспорта, подходящую для вашего бизнеса. Лизинговые программы,
            разработанные в Европлане, позволяют приобретать легковые и грузовые автомобили, а также строительную,
            дорожную, сельскохозяйственную и другую спецтехнику.
          </p>
          <button class="btn btn-danger" @click="requestModal = true">Оставить заявку</button>
          <v-modal :show="requestModal" :header-title-text="'Заголовок'">
            <template v-slot:body>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Ваше имя</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Номер телефона</label>
                <input type="phone" class="form-control" id="exampleInputPassword1">
              </div>
            </template>
            <template v-slot:footer>
              <button class="btn btn-sm btn-primary me-2">Отправить</button>
              <button class="btn btn-sm btn-danger" @click="requestModal = false">Закрыть</button>
            </template>
          </v-modal>
        </div>
      </div>
      <div class="col-5"></div>
    </div>
    <div class="container mt-5">
      <div class="cards d-flex flex-wrap justify-content-around">
        <div class="card  me-2 d-flex flex-column mb-2" v-for="card in 6" :key="card">
          <h5 class="card-title p-3">
            Лизинг легковых автомобилей для юридических лиц
          </h5>
          <div class="card-subtitle ps-3 pe-3">
            Финансовый лизинг с первоначальным взносом от 0%
          </div>
          <a href="" class="p-3 mt-5">Подробнее ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vModal from '@/components/v-modal.vue';
export default {
  data() {
    return {
      requestModal: false
    }
  },
  components: {
    vModal
  }
}
</script>

<style lang="scss" scoped>
.home-header-background {
  background-image: url(../assets/homePage/leasing-business-bg.webp);
  background-position: 50% 0%;
  background-size: auto;

}

.card {
  max-width: 400px;
}

.home-header-background {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>