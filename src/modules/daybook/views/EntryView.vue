<template>

    <div class="entry-title d-flex justify-content-between p-2 ">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">julio</span>
            <span class="mx-2 fs-4 fw-light">2023, viernes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2 ">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>  
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="Que sucedió hoy?" />
    </div>
    <Fab icon="fa-save" />
    <img 
        src="https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg" 
        alt="entry-picture"
        class="img-thumbnail"
        >
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
    components:{
        Fab: defineAsyncComponent(() => import('@/modules/daybook/component/Fab.vue') )
    }
}
</script>

<style lang="scss" scoped>
    textarea {
        border: none;
        font-size: 20px;
        height: 100%;

        &:focus {
            outline: none;
        }
    }
   /*  alpha es la transparencia */
    img {
      bottom: 150px;
      box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 1.0);
      position: fixed;
      right: 20px;
      width: 200px;
    }

</style>