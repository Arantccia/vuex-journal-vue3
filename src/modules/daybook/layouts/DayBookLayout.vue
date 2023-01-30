<template>
    <NavBar/>
    <div class="d-flex">
        <div class="col-4">
            <Entrylist />
        </div>
        <div class="col">
            <router-view/>
        </div>

    </div>
   
</template>

<script>
import { defineAsyncComponent } from "vue";
    export default{
        components:{
            NavBar: defineAsyncComponent(()=>import('@/modules/daybook/component/NavbarVue.vue')),
            Entrylist: defineAsyncComponent(()=>import('@/modules/daybook/component/Entrylist.vue'))
        }
    }

</script>