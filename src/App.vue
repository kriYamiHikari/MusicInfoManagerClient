<script>

export default {
  name: 'App'
}
//防抖函数，本质是限制函数执行速率
const debounce = (fn, delay) => {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
// 解决ERROR ResizeObserver loop completed with undelivered notifications. 对执行速度进行限制
// https://blog.csdn.net/qq_65032048/article/details/133083131
const _ResizeObserver = window.ResizeObserver
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16)
    super(callback)
  }
}
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "@/styles/index";

body {
  margin: 0;
  padding: 0;
  font-family: $global-font-family;
  font-size: $global-font-size;
  color: $global-primary-font-color;
}
</style>
