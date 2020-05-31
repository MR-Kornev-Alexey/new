<template>
  <div class="v-main-wrapper ">
    <v-sidebar/>
    <b-container class="main-container">
      <v-header/>
      <v-main />
      <v-footer/>
    </b-container>
  </div>
</template>

<script>
import vSidebar from './sidebar/v-sidebar'
import vHeader from './header/v-header'
import vMain from './main/v-main'
import vFooter from './footer/v-footer'
export default {
  name: 'v-main-wrapper',
  components: {
    vSidebar,
    vHeader,
    vMain,
    vFooter
  },
  computed: {}
}
</script>

<style scoped lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');

  .v-main-wrapper {
     margin: 0 auto;
    text-align: center;
    .main-container {
      max-width: 1000px;
    }
  }
</style>
