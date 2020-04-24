import DButton from './src/index';

export default DButton;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('DButton', DButton);
}
