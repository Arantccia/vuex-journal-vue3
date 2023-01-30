<template>
  <div class="entry-list-container">
    <div class="px2 pt-2">
        <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar entradas"
        >

    </div>
    <div class="entry-scrollarea">
        <Entry
            v-for="item in 100"
            :key="item" />

    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    components:{
        Entry: defineAsyncComponent(()=> import('@/modules/daybook/component/Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>
    .entry-list-container{
        border-right: 1px solid #2c3e50;
        /*  del 100% del view hight resta 56px */
        height: calc(100vh - 56px);

    }
    .entry-scrollarea{
        height: calc(100vh - 100px);
      /*   si el contenido es mas grade que el height: hacemos scroll */
        overflow: scroll;
    }
</style>
