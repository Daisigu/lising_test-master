<template>
    <div class="container mt-5">
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
                    <a href="#" class="btn btn-primary align-self-start">Отправить</a>
                </div>
            </div>
            <div class="card contact-card me-2">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title">Закажите обратный звонок</h5>
                    <a href="#" class="btn btn-primary align-self-start">Оставить заявку</a>
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
                    <a href="#" class="btn btn-primary align-self-start me-2">Telegram</a>
                    <a href="#" class="btn btn-success align-self-start">Whats-up</a>
                   </div>
                </div>
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
.contact-card{
    flex-basis: 24%;
}
.card-body{
    min-height: 170px;
}
</style>