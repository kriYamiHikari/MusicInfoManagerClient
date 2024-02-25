<!--suppress JSValidateTypes -->
<script>

import SideBarMain from "@/layout/SideBar/SideBarMain.vue";
import NavBar from "@/layout/NavBar.vue";

export default {
  name: "IndexView",
  components: {NavBar, SideBarMain},
  data() {
    return {
      backgroundImage: require('@/assets/background/default_bg.jpg')
    }
  },
}
</script>

<template>
  <div class="parent-div">
    <el-image :src="backgroundImage" fit="cover" class="background-image"></el-image>
    <div class="background-div"></div>
    <div class="parent-container">
      <el-container style="height: 100%">
        <el-aside>
          <el-card class="aside-card">
            <side-bar-main></side-bar-main>
          </el-card>
        </el-aside>
        <el-container>
          <el-header>
            <el-card class="header-card">
              <nav-bar></nav-bar>
            </el-card>
          </el-header>
          <el-main>
            <el-card class="main-card">
              <transition name="el-fade-in" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/index";

$container-width: calc(100% - $global-layout-outside-margin * 2 - 10px);
$container-height: calc(100% - $global-layout-outside-margin * 2);

.parent-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.background-image {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -999999;
}

.background-div {
  width: $container-width;
  height: $container-height;
  position: fixed;
  z-index: -999998;
  background-color: $global-layout-background-color;
  border-radius: $global-layout-border-radius;
  backdrop-filter: blur($global-layout-background-blur);
  transition: $global-layout-transition;
  box-shadow: $global-layout-background-glow;
}

.parent-container {
  width: $container-width;
  height: $container-height;
  transition: $global-layout-transition;
}

.el-header {
  margin-top: $global-layout-margin;
  padding-left: 0;
  padding-right: $global-layout-margin;
  transition: $global-layout-transition;
  height: $global-layout-header-height !important;
}

.el-main {
  padding: $global-layout-margin $global-layout-margin $global-layout-margin 0;
  transition: $global-layout-transition;
}

.el-aside {
  padding-right: $global-layout-margin;
  padding-left: $global-layout-margin;
  padding-bottom: $global-layout-margin;
  margin-top: $global-layout-margin;
  width: 100% !important;
  max-width: $global-layout-aside-width + $global-layout-margin * 2 !important;
  transition: $global-layout-transition;
}

.aside-card {
  height: 100%;
  display: flex;
  justify-content: center;
}

.main-card {
  height: 100%;
}

.header-card {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
