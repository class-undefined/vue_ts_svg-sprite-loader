<template>
  <el-menu default-active="2"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose">
    <el-submenu v-for="(item,index) in svgIconArray" :index="(index + 1).toString()" :key="item.title">
      <template #title>
        <i class="el-icon-location"></i>
        <span>{{item.title}}</span>
      </template>
      <el-menu-item-group>
<!--        <template #title>{{item.title}}</template>-->
        <el-menu-item v-for="(svgItem,svgIndex) in item.SvgIcons" :index="(index+1) + '-' + (svgIndex+1)" :key="svgItem.name">
          <svg-icon :name="svgItem.name"/>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { computed } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default {
  name: 'IconSelector',
  components: { SvgIcon },
  props: {
    SvgIconArray: {
      type: Array,
      required: true
    }
  },
  setup (prop) {
    const svgIconArray = computed(() => {
      return prop.SvgIconArray
    })
    const handleOpen = function (key, keyPath) {
      console.log(key, keyPath)
    }
    const handleClose = function (key, keyPath) {
      console.log(key, keyPath)
    }
    return {
      prop,
      svgIconArray,
      handleOpen,
      handleClose
    }
  }
}
</script>

<style scoped>

</style>
