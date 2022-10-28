<template>
  <v-navbar></v-navbar>
  
  <router-view></router-view>
</template>

<script>
import { mapMutations } from 'vuex';
import VNavbar from './components/v-navbar.vue';
import Do from './components/v-carousel.vue';
export default {
  components: { VNavbar, Do },
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

}

a {
  text-decoration: none;
  color: inherit;
}
</style>
