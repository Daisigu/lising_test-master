<template>
        <div class="spinner-border" role="status" :style="'width: ' + w + 'rem; height: ' + h + 'rem;'">
            <span class="visually-hidden">Loading...</span>
        </div>
</template>

<script>
export default {
    props: {
        h: Number,
        w: Number
    }
}
</script>

<style scoped>

</style>