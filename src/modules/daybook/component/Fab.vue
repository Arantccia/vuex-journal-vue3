<template>
  <button class="btn btn-primary">
<!-- viene de ENTRYVIEW diferentes maneras de hacerlo-->
<!--     <i class="fa fa-2x"
       :class="icon"
       @click="$emit('on:click')"
      /> -->
    <!--No utilizar esta!!! ya que ataca al punto de referencia y 
        no sabe cual componente se ha cargado -->
    <!-- <i class="fa fa-2x"
       :class="icon"
       @click="savewhitReflectApply"  />  -->

    <i class="fa fa-2x"
       :class="icon"
       @click="$emit('on:saveEntry')" 
    />
      
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type: String,
      default: 'fa-plus'
    },
    saveEntryApply:{
      type: Function
    }
  },
  emits: ["on:saveEntry", "on:click"],
  methods:{
    saveEntry(){
      this.$emit('on:saveEntry')
    },

    savewhitReflectApply(){
      // NO UTILIZAR EL REFLECT YA QUE ATACA AL PUNTO DE 
      // REF DEL OBJETO Y NO SABE CUAL HIJO SE HA CARGADO.
      Reflect.apply(this.saveEntryApply, null, [])
    }
  }

}
</script>

<style lang="scss" scoped>
    button {
        border-radius:  100%;
        bottom:         20px;
        height:         60px;
        position:       fixed;
        right:          20px;
        width:          60px;

    }
</style>