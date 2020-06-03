<template>
  <div class="v-catalog-item">
    <div class="v-catalog-item__image">
      <a target="_blank" :href="`https://klvr.link/` + relisData.pageUrl ">
      <img  :src=" `https://storage.yandexcloud.net/klever-images/` + relisData.image " alt="image"></a>
    </div>
    <div class="v-catalog-item__name">
  {{relisData.titleName}}
    </div>
    <div class="v-catalog-item__title">
      <a target="_blank" :href="`https://klvr.link/` + relisData.pageUrl ">
        {{relisData.title}}</a>
    </div>
    <div class="v-catalog-item__number">
      Линков: {{relisData.count}}
    </div>

<!--    <button class="v-catalog__item__add_to_cart_btn btn" @click="addToCart">add to cart</button>-->
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    relisData: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.relisData)
    }
  }
}
</script>

<style scoped lang="scss">
  .v-catalog-item {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;
    font-size: 14px;

    &__image img {
      width: 140px;
      height: 140px;
    }
    &__name {
      height: 40px;
    }
    &__title {
      height: 60px;
      a {
        text-decoration: none;
        color: #5e5e5e;
      }
      a:hover {
        transition: all .5s ease-in-out;
        color: #3d498c;
      }
    }
    &__number{
      color: brown;
      font-weight: bold;
      height: 10px;
    }
  }
</style>
