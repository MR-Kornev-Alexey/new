<template>
  <header class="v-header">
    <b-row align-v="center">
      <b-col><h1>Клевер линк</h1></b-col>
      <b-col  cols="10" md="auto">Manager</b-col>
      <b-col col lg="1"> <img class="avatar" src="../../assets/images/avatarka.jpg" alt="Avatarka"></b-col>
    </b-row>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped lang="scss">
  .v-header {
    hr{
      border-bottom: 1px solid #3d498c;
      width: 80%;
    }

    margin: 0 auto;
    h1 {
      font-size: 50px;
      text-transform: uppercase;
      margin-left: 60px;
      margin-top: 28px ;
      margin-bottom: 12px;
    }
  }
  .avatar {
    margin-right: 100px;
    height: 40px;
    width: 40px;
  }

</style>
