<template>
  <div id="app">
     <v-main-wrapper/>
  </div>
</template>

<script>

import vMainWrapper from './components/v-main-wrapper'
export default {
  name: 'App',
  components: {
    vMainWrapper
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   }
</style>
