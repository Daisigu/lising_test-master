<template>
    <div class="spinner-fade">
        <div class="spinner-border" role="status" :style="'width: ' + w + 'rem; height: ' + h + 'rem;'">
            <span class="visually-hidden">Loading...</span>
        </div>
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
.spinner-fade {
    position: fixed;
    top: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.856);
    left: 0;
    z-index: 2;
}
</style>