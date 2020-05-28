<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'v-main-wrapper',
  components: {},
  computed: {}
}
</script>

<style scoped lang="scss">
  .v-main-wrapper {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }
</style>
