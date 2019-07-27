import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: 'Duoをやる',
        isFinished: false
      },
      {
        id: 2,
        title: 'HIITをやる',
        isFinished: false
      }
    ]
  },
  getters: {
    items: state => state.items
  },
  mutations: {
    updateTodo (state, todo) {
      state.items.map(item => {
        if (item.id === todo.id) {
          item.isFinished = todo.isFinished
        }
      })
    }
  },
  actions: {
    doAction ({ commit }, todo) {
      todo.isFinished = !todo.isFinished
      commit('updateTodo', todo)
    }
  }
})
