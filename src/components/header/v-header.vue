<template>
  <header class="v-header">
    <b-row align-v="center" class="d-flex justify-content-between">
      <div>
        <b-form inline class="header__search">
          <label class="sr-only" for="inline-form-input-username">Username</label>
          <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="введите имя или название ..."></b-input>
          </b-input-group>
          <b-button>Найти</b-button>
        </b-form>
      </div>
      <div class="d-flex align-items-center header__manager">
        <div><h5>Manager</h5></div>
        <div><img class="avatar" src="../../assets/images/avatarka.jpg" alt="Avatarka"></div>
      </div>

    </b-row>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'v-header'
}
</script>

<style scoped lang="scss">
  .header__search {
    padding-left: 60px;
  }
  .header__manager {
    h5 {
      padding-right: 10px;
    }
  }

  .v-header {
    margin: 20px auto;

    h1 {
      font-size: 50px;
      text-transform: uppercase;
      margin-left: 60px;
      margin-top: 28px;
      margin-bottom: 12px;
    }
  }

  .avatar {
    margin-right: 100px;
    height: 40px;
    width: 40px;
  }

</style>
