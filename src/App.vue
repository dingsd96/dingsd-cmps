<template>
  <div id="app">
    <DButton></DButton>
    <BButton></BButton>
  </div>
</template>

<script>
  import DButton from './packages/ding-buttons'
  import BButton from './packages/bin-buttons'

  export default {
    name: 'app',
    components: {
      DButton,
      BButton
  },
    data() {
      return {
        msg: ''
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
