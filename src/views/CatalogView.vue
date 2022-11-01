<template>
    <div id="container" class="mt-5">
        <h1>Каталог автомобилей</h1>
      <div class="row">
        <v-car-catalog class="col-10"></v-car-catalog>
        <v-catalog-filter class="col-2"></v-catalog-filter>
      </div>
    </div>
</template>

<script>
import vCarCatalog from '@/components/car-catalog/v-car-catalog.vue';
import vCatalogFilter from '@/components/car-catalog/v-catalog-filter.vue';
export default {
    components: {
        vCarCatalog, vCatalogFilter
    }
}
</script>

<style scoped>
#container {
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>