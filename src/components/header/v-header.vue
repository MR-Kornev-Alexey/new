<template>
  <header class="v-header">
    <b-row align-v="center">
      <b-col><h1>Клевер линк</h1></b-col>
      <b-col  cols="12" md="auto">Manager</b-col>
      <b-col col lg="1"> <img class="avatar" src="../../assets/images/avatarka.jpg" alt="Avatarka"></b-col>
    </b-row>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped lang="scss">
  .v-header {
    margin: 0 auto;
    h1 {
      text-transform: uppercase;
      margin-left: 40px;
    }
  }
  .avatar {
    height: 40px;
    width: 40px;
  }

</style>
