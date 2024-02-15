<script>
export default {
  name: "navBar",
  props: {
    height: {
      type: Number,
      default: 60
    },
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  },
}
</script>

<template>
  <div class="navbar-container" :style="{height: height+'px'}">
    <el-button @click="show = !show">test</el-button>
    <transition name="el-fade-in">
      <div v-if="show">test</div>
    </transition>
  </div>
</template>

<style scoped lang="scss">

</style>
