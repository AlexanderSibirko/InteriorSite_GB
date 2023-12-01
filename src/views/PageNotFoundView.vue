<template>
  <div class="content">
    <InteriorError404 />  
  </div>
</template>

<script>
// @ is an alias to /src
import InteriorError404 from '@/components/Error404.vue'


export default {
  name: 'PageNotFoundView',

  components: {
    InteriorError404
},

}
</script>

<style lang="sass">
  @import '../assets/globalStyle.sass'  
</style>
