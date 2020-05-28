<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
      v-for="(item,index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">

  .v-catalog__link_to_cart {
    position: fixed;
    top: 80px;
    right: 10px;
    padding: $padding*2;
    border: solid 1px #aeaeae;
    background: #ffffff;
  }

</style>
