<script>
export default {
  name: "NavBar",
  computed: {
    routeTitle() {
      return this.$route.meta['title']
    },
    routeIcon() {
      return this.$route.meta['icon']
    }
  },
}
</script>

<template>
  <transition name="el-fade-in" mode="out-in">
    <div class="navbar-container" :key="routeTitle">
      <i :class="routeIcon"></i>
      <div class="text-div">
        {{ routeTitle }}
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import "@/styles/index";

.navbar-container {
  display: flex;
  align-content: center;

  i {
    line-height: 1.25;
    font-size: 1.3rem;
    margin-right: 8px;
    color: $global-icon-color;
    opacity: 98%;
  }
}

.text-div {
  font-size: 1.25rem;
  font-weight: bold;
  color: $global-primary-font-color;
}
</style>
