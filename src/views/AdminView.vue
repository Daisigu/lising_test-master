<template>
    <div class="container mt-5">
        <h1>Админка</h1>
        
        <v-add-car></v-add-car>
        <v-update-car class="mt-5"></v-update-car>
    </div>
</template>

<script>
import vAddCar from '@/components/admin-panel/v-add-car.vue'
import VUpdateCar from '@/components/admin-panel/v-update-car.vue'

 export default {
  components: { vAddCar, VUpdateCar },
        
    }
</script>
   
<style scoped>

</style>