<template>
  <v-navbar></v-navbar>
  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>

<script>
import { mapMutations } from 'vuex';
import VNavbar from './components/v-navbar.vue';
export default {
  components: { VNavbar, },
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
