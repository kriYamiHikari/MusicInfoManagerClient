<script>
import IconLabel from "@/components/IconLabel.vue";

export default {
  name: "sideBar",
  components: {IconLabel},
  data() {
    return {
      iconSrc: require('@/assets/70336750_p0head.png')
    }
  },
}
</script>

<template>
  <div class="side-container">
    <!--suppress JSValidateTypes -->
    <icon-label :src="iconSrc" text="Manager System"></icon-label>
    test side
  </div>
</template>

<style scoped lang="scss">

</style>
