import DButton from './src/index.vue'

export default DButton
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('DButton', DButton)
}
