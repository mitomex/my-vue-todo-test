import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  getters: {
    items: state => state.items,
    totalNum: state => state.items.length
  },
  mutations: {
    addTodo (state, todo) {
      state.items.push(todo)
    },
    updateStatus (state, todo) {
      state.items.map(item => {
        if (item.id === todo.id) {
          item.isFinished = todo.isFinished
        }
      })
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('addTodo', todo)
    },
    doAction ({ commit }, todo) {
      todo.isFinished = !todo.isFinished
      commit('updateStatus', todo)
    }
  }
})
