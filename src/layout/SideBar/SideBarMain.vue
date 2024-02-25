<script>
import IconLabel from "@/components/IconLabel.vue";
import SideBarItem from "@/layout/SideBar/SideBarItem.vue";

export default {
  name: "SideBarMain",
  components: {SideBarItem, IconLabel},
  data() {
    return {
      iconSrc: require('@/assets/70336750_p0head.png'),
      defaultActive: ''
    }
  },
  mounted() {
    this.defaultActive = this.$route.fullPath
  },
}
</script>

<template>
  <div class="side-container">
    <!--suppress JSValidateTypes -->
    <icon-label :src="iconSrc" text="音乐信息管理"></icon-label>
    <div class="menu-container">
      <el-menu :router="true" :default-active="defaultActive">
        <side-bar-item v-for="route in $router.options.routes" :key="route.path" :item="route"
                       :base-path="route.path"></side-bar-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-container {
  display: flex;
  flex-direction: column;
}

.menu-container {
  margin-top: 20px;
}
</style>
