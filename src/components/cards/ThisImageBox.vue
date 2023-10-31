<template>
  <div
    class="relative bg-no-repeat bg-cover bg-center h-[218px] before:absolute
      before:left-0 before:top-0 before:w-[100%] before:h-[100%] z-[1] 3xl:h-[325px]"
    :style="[`background-image: url('${bgImagePath}'`]"
  ></div>
</template>

<script setup lang="ts">
defineProps({
  bgImagePath: {
    type: String,
    required: true,
  },
  overlyColor: { // TODO: Try to use this prop in this component
    type: String,
    default: 'purple',
    validator(value: string) {
      return ['lightGray', 'gray', 'darkGray', 'purple', 'cyan', 'white'].includes(value);
    },
  },
});
</script>
