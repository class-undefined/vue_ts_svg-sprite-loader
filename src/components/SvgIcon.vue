<template>
  <svg
    :class="className"
    :style="{
      width: props.size + 'px',
      height: props.size + 'px',
      color: props.color
    }"
  >
    <use :xlink:href="`#icon-${props.name}`" :fill="props.color"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { SvgIconProps } from '@/types/custom'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
      default: 'vue'
    },
    nick: {
      type: String,
      required: false,
      default: 'undefined'
    },
    size: {
      type: Number,
      default: 32
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  setup (props) {
    const className = computed(() => {
      return 'svg-icon-[' + props.nick + ']'
    })
    return {
      props,
      className
    }
  }
})
</script>
