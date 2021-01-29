// import Vuex from 'vuex'

// const store = () => new Vuex.Store({
//   state: {
//     token: 'old store test'
//   },
//   mutations: {
//     setToken (state, token) {
//       state.token = token
//     }
//   }
// })

// export default store

export const state = () => ({
  token: 'new store test'
})
export const getters = {
  getToken (state) {
    return state.token
  }
}
export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
export const actions = {
  // TODO ajax here
}
