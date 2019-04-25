import Vue from 'vue'
import Vuex from 'vuex'
import shoppingCart from './modules/shoppingCart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    shoppingCart: {
      namespaced: true,
      ...shoppingCart
    }
  }
})

export default store
