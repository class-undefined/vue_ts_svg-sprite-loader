<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <icon-selector :SvgIconArray="svgIconArray"/>
      </el-aside>
      <el-main>Main</el-main>
      <el-aside width="200px">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconSelector from '@/components/IconSelector/IconSelector.vue'
import { SvgIconArray } from '@/types/custom'

export default defineComponent({
  name: 'Main',
  components: { IconSelector },
  data () {
    return {
      svgIconArray: [{
        title: '分类一',
        SvgIcons: [{
          name: '1',
          nick: '↓',
          size: 32,
          desc: '方向下'
        }, {
          name: '2',
          nick: '+-',
          size: 32,
          desc: '加减'
        }, {
          name: '3',
          nick: '↓↓',
          size: 32,
          desc: '方向下下'
        }]
      }, {
        title: '分类二',
        SvgIcons: [{
          name: '4',
          nick: 'WIRE',
          size: 32,
          desc: 'WIRE'
        }, {
          name: '5',
          nick: 'NAME NODE',
          size: 32,
          desc: '节点名称'
        }]
      }] as SvgIconArray
    }
  }
})
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  box-shadow: 0 3px 2px 1px rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-bottom: 5px;
}

.el-aside {
  background-color: #D3DCE6;
  box-shadow: 0 3px 2px 1px rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
