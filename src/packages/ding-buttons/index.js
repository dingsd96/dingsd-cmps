import DButton from './src/index';
// import BButton from './src/index';

export default DButton;
// export default BButton;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('DButton', DButton);
  // window.Vue.component('BButton', BButton);
}








