<!--suppress JSUnresolvedReference -->
<script>
export default {
  name: "SideBarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      defaultActive: ''
    }
  },
  mounted() {
    this.defaultActive = this.$route.fullPath
  },
  methods: {
    hasOneOrNonChildRouter(item) {
      if (item.children === undefined || item.children.length === 0) {
        return true
      }
      if (item.children.length === 1) {
        return this.basePath === item.path;
      }
    },
    realPath(parentPath) {
      if (this.item.path === parentPath) {
        return this.item.path
      }
      return parentPath + '/' + this.item.path
    }
  },
}
</script>

<template>
  <div>
    <template v-if="hasOneOrNonChildRouter(item)">
      <el-menu-item :index="realPath(basePath)">
        <template v-if="item.meta !== undefined">
          <i :class="item.meta.icon"></i>
        </template>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="item.path">
        <!--suppress VueUnrecognizedSlot -->
        <template #title>
          <template v-if="item.meta !== undefined">
            <i :class="item.meta.icon"></i>
          </template>
          <span>{{ item.name }}</span>
        </template>
        <side-bar-item v-for="child in item.children" :key="child.path" :item="child"
                       :base-path="realPath(basePath)"></side-bar-item>
      </el-submenu>
    </template>
  </div>
</template>

<style scoped lang="scss">

</style>
