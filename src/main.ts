import Vue from 'vue'
import TodoApp from './TodoApp.vue'
import store from './store'
import '@/assets/styles/global.sass'

Vue.config.productionTip = false

new Vue({
   store,
   render: h => h(TodoApp)
}).$mount('#TodoApp')
