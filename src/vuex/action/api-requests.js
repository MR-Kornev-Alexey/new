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
  GET_LINKS_FROM_API ({ commit }) {
    return axios.get('https://klvr.link/getall')
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
    return axios.get('https://klvr.link/getnumber')
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
