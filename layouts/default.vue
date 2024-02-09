<template>
  
  <!-- wrapper--------------------------------------------------- -->
  <!-- <navBar/> -->
  <div  class="w-[77%] m-auto ">
      <slot />
    </div>
  </template>
<script>
import navBar from '~/components/navBar.vue'

export default {
    name:'default',
    components:{
        navBar
    }
}

</script>