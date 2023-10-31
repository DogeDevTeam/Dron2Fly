<template>
  <div
    class="relative min-h-[240px] bg-no-repeat bg-center bg-cover before:absolute before:top-0
      before:left-0 before:w-[100%] before:h-[100%] before:transition-opacity
      before:duration-300 before:ease-out before:opacity-0 hover:before:opacity-0
      xlg:before:opacity-100 xl:min-h-[277px]"
    :style="`background-image: url('${imagePath}')`"
    :class="getOverlayColor"
  ></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  overlayColor: {
    type: String,
    default: 'purple',
    validator(value: string) {
      return ['purple', 'gray', 'white', 'cyan'].includes(value);
    },
  },
});

/** Return overlay color before class based on overlayColor prop */
const getOverlayColor = computed<String>(() => {
  switch (props.overlayColor) {
    case 'purple':
      return 'before:bg-purple/70';
    case 'gray':
      return 'before:bg-gray/70';
    case 'white':
      return 'before:bg-white/70';
    case 'cyan':
      return 'before:bg-cyan/70';
    default:
      return 'before:bg-purple/70';
  }
});
</script>
