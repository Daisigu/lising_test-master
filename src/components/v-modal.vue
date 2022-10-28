<template>
    <div class="modal-fade" v-if="show" @click.self="show=false">
        <div class="modal-dialog" >
            <div class="modal-header mb-2">
                <h5>
                    {{ headerTitleText }}
                </h5>
                <span class="modal-close-cross" @click="show = false"><i class="bi bi-x-lg"></i></span>
            </div>
            <div class="modal-body mb-2">
                <slot name="body">

                </slot>
            </div>

            <div class="modal-footer">
                <slot name="footer">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
    props: {
        toggleButtonText: String,
        headerTitleText: String,
        toggleButtonClass: String,
        show: Boolean,
    },
    methods: {
        toggleModal() {
            this.show = !this.show
        }
    },
}
</script>

<style scoped>
.modal-fade {
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.363);
    z-index: 1;
}

.modal-close-cross {
    cursor: pointer;
}
.modal-body{
    word-wrap: break-word;
    display: block;
    min-height: 9rem;
    border-bottom: 1px solid lightgray;
  
}
.modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    pointer-events: all;
    border-bottom: 1px solid lightgray;
}

.modal-dialog {
    padding: 1rem;
    background: white;
    display: block;
    min-height: 200px;
    min-width: 400px;
    max-width: 500px;
    z-index: 2;
    pointer-events: all;
}
</style>