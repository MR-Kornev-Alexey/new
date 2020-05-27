<template>
  <div class="v-main-wrapper">
   <h1>Main wrapper !</h1>
    <v-catalog/>
    <v-cart/>
  </div>
</template>

<script>
import vCatalog from './v-catalog'
import vCart from './v-cart'
export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart
  }
}
</script>

<style scoped>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding-bottom: 10px;
}
</style>
