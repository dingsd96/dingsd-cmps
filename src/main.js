import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/element-ui-components'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: (h) => h(App)
})
