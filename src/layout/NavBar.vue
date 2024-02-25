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
  data() {
    return {

    }
  },
}
</script>

<template>
  <div class="navbar-container">
    <i :class="routeIcon"></i>
    <div class="text-div">
      {{routeTitle}}
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/index";
.text-div {
  font-size: 1.25rem;
  font-weight: bold;
}
.navbar-container{
  display: flex;
  align-content: center;
  i{
    line-height: 1.25;
    font-size: 1.3rem;
    margin-right: 8px;
    color: $global-primary-font-color;
    opacity: 98%;
  }
}
</style>
