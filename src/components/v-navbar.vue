<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">КРКЛизинг</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{active: linkActiveClass('/')}" aria-current="page" to="/">Главная</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{active: linkActiveClass('/catalog')}" to="/catalog">Каталог автомобилей</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{active: linkActiveClass('/contacts')}" to="/contacts">Контакты</router-link>
                    </li>
                </ul>
                <ul class="d-flex navbar-nav">
                    <router-link class="nav-link" to="/lk" :class="{active: linkActiveClass('/lk')}">Личный
                        кабинет</router-link>
                        <router-link class="nav-link" to="/admin" :class="{active: linkActiveClass('/admin')}">Админка</router-link>
                </ul>
            </div>
        </div>

    </nav>
</template>




<script>
export default {
    methods: {
        linkActiveClass(route){
            if(this.$router.currentRoute.value.path==route){
                return true;
            }
        },
    }, 

}
</script>

<style lang="scss" scoped>

</style>