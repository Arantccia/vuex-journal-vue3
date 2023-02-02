<template>
  <div class="entry-list-container">
    <div class="px2 pt-2">
        <input 
        type="text" 
        class="form-control" 
        placeholder="Buscar entradas"
        v-model="term"
        >
    </div>
    <div class="mt-2 d-flex flex-column">
        <!--mx = margen en el modo horizontal-->
        <button 
            class="btn btn-primary mx-3"
            @click="$router.push({ name:'entry', params:{id: 'new'}})"
            >
            <i class="fa fa-plus-circle"></i>
            Nueva entrada
        </button>
    </div>
    <div class="entry-scrollarea">
        <Entry
            v-for="entry in entriesbyTerm"
            :key="entry.id"
            :entry="entry" />
           
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
    components:{
        Entry: defineAsyncComponent(()=> import('@/modules/daybook/component/Entry.vue'))
    },
    computed:{

        // saca del state todas las propiedades que vayamos a utilizar en este caso el count
        ...mapGetters('journal',['getEntriesbyTerm']),
        entriesbyTerm(){
            return this.getEntriesbyTerm(this.term)
        }
    },
    data(){
        return{
            term:''
        }
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
