<template>
  <div >
   <div class="home-header-background container-fluid">
    <div class="d-flex flex-column container">
      <div class="col-7">
        <h1>Лизинг для юридических лиц и индивидуальных предпринимателей</h1>
    <p>
      Выберите программу финансирования автотранспорта, подходящую для вашего бизнеса. Лизинговые программы, разработанные в Европлане, позволяют приобретать легковые и грузовые автомобили, а также строительную, дорожную, сельскохозяйственную и другую спецтехнику.
    </p>
    <button class="btn btn-danger align-self-start">Оставить заявку</button>
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
  export default {
    
  }
</script>

<style lang="scss" scoped>
.home-header-background{
  background-image: url(../assets/homePage/leasing-business-bg.webp);
  background-position: 50% 0%;
  background-size: auto;
  
}
.card{
 max-width: 400px;
}
.home-header-background{
padding-top: 5rem;
padding-bottom: 5rem; 
}
</style>