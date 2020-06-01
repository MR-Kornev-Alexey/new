<template>
    <div class="v-table"
      :users_data="USERS">
      <h1>Users list </h1>
      <div class="v-table__header">
        <p @click="sortByName"> Name <i class="material-icons">unfold_more</i> </p>
        <p>Family <i class="material-icons">unfold_more</i> </p>
        <p>Company <i class="material-icons">unfold_more</i> </p>
        <p @click="sortByDate">Registration date <i class="material-icons">unfold_more</i> </p>
      </div>
      <div class="v-table__body">
        <v-table-row
          v-for="row in paginationUsers"
          :key="row.id"
          v-bind:row_data="row"
        />
      </div>
      <div class="v-table__pagination">
        <div class="page "
        v-for="page in pages"
          :key="page"
            @click="pageClick(page)"

        >{{page}}

        </div>
      </div>
    </div>
</template>

<script>
import vTableRow from './v-table-row'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'v-table',
  components: {
    vTableRow
  },
  props: {
    user_data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      userPerPage: 10,
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters([
      'USERS'
    ]),
    pages () {
      return Math.ceil(this.USERS.length / 10)
    },
    paginationUsers () {
      const from = (this.pageNumber - 1) * this.userPerPage
      const to = from + this.userPerPage
      return this.USERS.slice(from, to)
    }
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_API'
    ]),
    pageClick (page) {
      this.pageNumber = page
    },
    sortByName () {
      this.USERS.sort((a, b) => a.name.localeCompare(b.name))
    },
    // ранжирует по числам
    sortByPointsEarned () {
      this.USERS.sort((a, b) => a.balance - b.balance)
    },
    sortByDate () {
      this.USERS.sort((a, b) => a.time_create.localeCompare(b.time_create))
    }
  },
  mounted () {
    this.GET_USERS_FROM_API()
  }
}
</script>

<style lang="scss">
  .v-table{
    max-width: 900px;
    margin: 0 auto;
  }
  .v-table__header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #aeaeae;
  }
  .v-table__header p {
    display: flex;
    align-items: center;
    flex-basis: 25% ;
    text-align: left;
    cursor: pointer;
  }
  .v-table__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .page{
    padding-top: 6px;
    width: 36px;
    height: 36px;
    border: 1px solid #aeaeae;
    cursor: pointer;
  }
  .page:hover {
    background: $maincolor;
    color: white;
  }
  .page__selected {
    background: $maincolor;
    color: white;
  }
</style>
