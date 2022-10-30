<template>
       <div class="side-back-link" @click="goBackSide()">

       </div>

</template>

<script>
    export default {
        methods: {
            goBackSide(){
                this.$router.back()
            }
        },
    }
</script>

<style  scoped>
.side-back-link{
    display: block;
    cursor: pointer;
    position: fixed;
    left: 0;
    width: 80px;
    height: 100vh;
    top: 0;
    z-index: 1;
}
.side-back-link:hover{
    background-color: rgba(128, 128, 128, 0.164);
}
</style>