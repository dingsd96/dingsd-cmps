import Vue from 'vue'
import App from './App.vue'

import elementUI from 'element-ui'
Vue.use(elementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
