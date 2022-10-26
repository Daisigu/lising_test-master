<template>
    <div class="container mt-5">
        <div v-if="isAuth">
           <h1>Личный кабинет</h1>
           <h5 @click="logOut" >Выйти</h5>
        </div>
        <div v-else class="d-flex justify-content-center">
           <VAuthorizationForm></VAuthorizationForm>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import VAuthorizationForm from '../components/v-authorization-form.vue';

export default {
  
    computed: {
        ...mapState([
            "isAuth",
            
        ]),
    },
    methods: {
        ...mapMutations([
        'setAuthFalse'
        ]),
        logOut(){
            this.$cookies.remove('user')
            this.setAuthFalse()
        },
    },
    components: { VAuthorizationForm }
}
</script>

<style  scoped>
   
</style>