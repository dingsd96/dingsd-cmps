<template>
  <div id="app">
    <DButton text="按钮"></DButton>
  </div>
</template>

<script>
import DButton from './packages/ding-buttons'

export default {
  name: 'app',
  components: { DButton },
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
