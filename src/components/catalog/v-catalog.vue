<template>
  <div class="v-catalog">
    <router-link :to="{name: 'cart', params:{cart_data: CART }}">
    </router-link>
    <h1>База клипов!</h1>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="item in LINKS"
        :key="item.pageUrl"
        v-bind:relisData="item"
       />
    </div>
    <div class="v-table__pagination">
      <div class="page"
           v-for="page in pages"
           :key="page"
           @click="pageClick(page)"
      >{{page}}
      </div>
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-catalog',
  components: {
    vCatalogItem
  },
  data () {
    return {
      userPerPage: 10,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters([
      'LINKS',
      'CART',
      'PAGES'
    ]),
    pages () {
      const num = Math.ceil(parseInt(this.PAGES.counter) / 10)
      return num > 0 ? num : 1
    }
  },
  methods: {
    ...mapActions([
      'GET_LINKS_FROM_API',
      'GET_NUMBER_PAGES_FROM_API',
      'ADD_TO_CART'
    ]),
    pageClick (page) {
      this.pageNumber = page
    }
  },
  mounted () {
    this.GET_LINKS_FROM_API()
      .then((resp) => {
        if (resp.data) {
          // console.log('data arrived')
        }
      }).catch(
        (error) => {
          console.log(error)
          return error
        }
      )
    this.GET_NUMBER_PAGES_FROM_API()
      .then((resp) => {
        if (resp.data) {
        }
      }).catch(
        (error) => {
          console.log(error)
          return error
        }
      )
  }
}
</script>

<style scoped lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link_to_cart {
      position: fixed;
      top: 80px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }
  .v-catalog__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .link-page{
    padding: 8px;
    border: 1px solid #aeaeae;
  }
  .link-page:hover {
    background: cadetblue;
  }
  .link-page__selected {
    background: cadetblue;
    color: white;
  }

</style>
