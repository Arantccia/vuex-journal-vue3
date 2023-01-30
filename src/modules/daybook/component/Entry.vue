<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name:'entry', params:{id: 10 }})"
    >
    <!-- titel -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">14</span>
        <span class="mx-1 fs-5">julio</span>
        <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-descripcion">
        Est esse tempor anim culpa aute eu mollit nostrud in id officia aliquip adipisicing. Est dolore minim magna eu ex quis est ullamco est voluptate magna laboris officia. Dolore cillum sint sit est Lorem nulla nisi fugiat amet non incididunt minim. Aliqua sunt laborum qui ipsum et exercitation officia veniam nostrud magna reprehenderit velit duis.

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;
        /* propio de sass & abreviatura de entry-container:hover
            lighten tambien es de sass es para aclarar con amount de 45%
        */
        &:hover{
            background-color: lighten($color:grey, $amount:45);
        }
    }
    .entry-title{

    }
    .entry-descripcion{
        font-size: 12px;
    }
</style>