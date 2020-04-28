<template>
  <div class="ding-button_wrapper">
    <el-button
      v-bind="$attrs"
      v-on="$listeners"
      @click="handleClick"
    >
      {{text}}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ding-buttons',
  props: {
    text: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    handleClick() {
      console.log(this.text, 'text')
    }
  }
}
</script>

<style lang="scss" scoped>
  .ding-button_wrapper {

  }
</style>
