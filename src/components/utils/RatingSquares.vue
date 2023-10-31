<template>
  <div class="flex items-center">
    <div class="flex mr-[10px] 3xl:mr-[12px]">
      <div
        class="w-[9px] h-[9px] mr-[8px] last:mr-0 rotate-45 3xl:w-[10px] 3xl:h-[10px] 3xl:mr-[10px]"
        v-for="n in squareCount"
        :key="n"
        :class="n <= rate ? 'bg-cyan' : 'bg-purple'"
      ></div>
    </div>

    <div class="font-openSans font-semibold text-darkGray text-[0.626rem] 3xl:text-[0.75rem]">
      {{ rate }} / {{ squareCount }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  squareCount: {
    type: Number,
    required: true,
    validator(value: number) {
      return value >= 1 && value <= 10;
    },
  },
  rate: {
    type: Number,
    default: 0,
    validator(value: number) {
      return value >= 0;
    },
  },
});
</script>
