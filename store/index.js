import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    }
  }
})

export default store
