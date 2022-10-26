<template>
     <form class="authorization-form d-flex flex-column">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Логин    </label>
                    <input  v-model="login" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input v-model="password"  type="password" class="form-control" id="exampleInputPassword1">
                </div>
             
                <button type="submit" class="btn btn-primary align-self-end" @click.prevent="authorizationLogin()">Войти</button>
                <p class="text-danger" v-if="errorMessage">{{errorMessage}}</p>
            </form>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
    export default {
        data() {
            return {
                login: '',
                password: '',
                errorMessage: '',
            }
        },
        methods: {
            ...mapMutations([
                'setAuthTrue'
            ]),
            authorizationLogin(){
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/auth/login',
                    data: {
                        username: this.login,
                        password: this.password
                    }
                }).then((res)=>{
                    this.$cookies.set('user', res.data.token, '24h')
                    this.setAuthTrue()
                }).catch((e)=>{
                    this.errorMessage=e.response.data.message
                })
            }
        }
    }
</script>

<style scoped>
 .authorization-form{
        max-width: 400px;
    }
</style>