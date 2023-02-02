<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2 ">
    
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3"> {{month}} </span>
                <span class="mx-2 fs-4 fw-light"> {{yearDay}} </span>
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
            <textarea placeholder="Que sucedió hoy?" v-model="entry.text" />
        </div>
        <img 
        src="https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_1280.jpg" 
        alt="entry-picture"
        class="img-thumbnail"
        >
    </template>
<!--      <Fab 
        icon="fa-save"
        @on:click="saveEntry"
    /> -->
    <!--No utilizar esta!!! ya que ataca al punto de referencia y 
        no sabe cual componente se ha cargado -->
<!--     <Fab 
        icon="fa-save"
        :saveEntryApply="saveEntry"
    /> -->
    <Fab 
        icon="fa-save"
        @on:saveEntry="saveEntry"
    /> 
   
         

    
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex'
import getDayMonthYear from "../helpers/getDayMonthYear";
import { conditionalExpression } from '@babel/types';


export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            entry: null,
        }
    },
    components:{
        Fab: defineAsyncComponent(() => import('@/modules/daybook/component/Fab.vue') )
    },
    computed:{
        ...mapGetters('journal',['getEntrybyId']),
     
        day(){
            const {day} = getDayMonthYear (this.entry.date)
            return day
        },
        month(){
            const {month} = getDayMonthYear (this.entry.date)
            return month
        },
        yearDay(){
            const {yearDay} = getDayMonthYear (this.entry.date)
            return yearDay
        },
    }, 
    methods:{
        ...mapActions('journal', ['updateEntry', 'createEntry']),
        loadEntry(){
            let entry;
            if(this.id === 'new'){
                entry ={
                    text:'',
                    date: new Date().getTime()
                }
            }else{
                entry = this.getEntrybyId(this.id)
                if( !entry) return this.$router.push({name:'no-entry'})
            }
           
            this.entry = entry
        },
        async saveEntry(){
            if(this.entry.id){
               await  this.updateEntry(this.entry)
           
            }else{
                const data=  await this.createEntry(this.entry)
                this.$router.push({name:'entry', params:{id:data}})
            }
             
             
        }
    },
    created(){
      /*   console.log(this.id) */
      this.loadEntry()
    },
    watch:{
       id(){
        this.loadEntry()

       } 
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