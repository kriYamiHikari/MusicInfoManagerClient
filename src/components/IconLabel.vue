<script>
export default {
  name: "IconLabel",
  props: {
    src: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'default text'
    }
  },
  data() {
    return {
      iconShow: true,
    }
  },
}
</script>

<template>
  <div style="display: flex;justify-content: center">
    <div style="display: flex;align-items: center">
      <el-image v-if="iconShow" :src="src"></el-image>
      <div class="text-div">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/index";
.el-image {
  width: 64px;
  height: 64px;
  margin-right: 14px;
  border-radius: 24px;
}

.text-div {
  font-weight: bold;
  font-size: 1.5rem;
  color: $global-primary-font-color;
}
</style>
