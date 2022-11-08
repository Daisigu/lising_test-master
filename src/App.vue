<template>
  <v-navbar></v-navbar>
  
  <router-view></router-view>
  <v-footer></v-footer>
</template>

<script>
import { mapMutations } from 'vuex';
import vFooter from './components/v-footer.vue';
import VNavbar from './components/v-navbar.vue';
export default {
  components: { VNavbar, vFooter },
  methods: {
    ...mapMutations([
      'setAuthTrue'
    ]),
  },
  mounted() {
    if (this.$cookies.get('user')) {
      this.setAuthTrue()
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans Display', sans-serif !important;

}

a {
  text-decoration: none;
  color: inherit;
}
</style>
