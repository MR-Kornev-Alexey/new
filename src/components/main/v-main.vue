<template>
    <main class="main">
      <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>
    </main>
</template>

<script>
export default {
  name: 'v-main'
}
</script>

<style lang="scss" scoped>
  .main{
    background: #fff;
  }

</style>
