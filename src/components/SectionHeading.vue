<template>
  <div class="flex items-center translate-x-[-9px]">
    <div
      class="w-[18px] h-[18px] rotate-45"
      :class="isWhite ? 'bg-white' : 'bg-lightGray'"
    ></div>

    <div
      class="w-[20%] h-[1px] 2xl:w-[200px]"
      :class="isWhite ? 'bg-white' : 'bg-lightGray'"
    ></div>

    <h3
      class="ml-[14px] font-openSans font-semibold text-[1.563rem] 2xl:text-[2.5rem]"
      :class="isWhite ? 'text-white' : 'text-darkGray'"
    >
      {{ headingText }}
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  headingText: {
    type: String,
    required: true,
  },
  isWhite: {
    type: Boolean,
  },
});
</script>
