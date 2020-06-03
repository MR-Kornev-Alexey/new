import axios from 'axios'

export default {
  GET_USERS_FROM_API ({ commit }) {
    return axios('http://localhost:3000/users', {
      method: 'GET'
    })
      .then((response) => {
        commit('SET_USERS_TO_STATE', response.data)
        return response
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
  POST_LINKS_FROM_API ({ commit }, { pageNumber, linksPerPage }) {
    const url = 'https://klvr.link/getall'
    // + '?pageNumber=' + pageNumber + '&linksPerPage=' + linksPerPage
    const data = { pageNumber: pageNumber, linksPerPage: linksPerPage }
    return axios.post(url, data)
      .then((resp) => {
        console.log(resp.data)
        commit('SET_LINKS_TO_STATE', resp.data)
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },
  GET_NUMBER_PAGES_FROM_API ({ commit }) {
    const url = 'https://klvr.link/getnumber'
    return axios.get(url)
      .then((resp) => {
        console.log(resp.data)
        commit('SET_NUMBER_PAGES_TO_STATE', resp.data)
        return resp.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}
