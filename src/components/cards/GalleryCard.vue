<template>
  <div
    class="flex justify-center items-center w-[100%] h-[100%] bg-no-repeat bg-center bg-cover
      before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:bg-white/70
      group/card before:transition-[opacity,border] duration-150 hover:before:opacity-0
      hover:border-[4px] border-purple 2xl:hover:border-[6px]"
    :style="`background-image: url('${cardImagePath}')`"
  >
    <div
      class="flex flex-col justify-center items-center relative transition-opacity duration-150
        group-hover/card:opacity-0"
    >
      <img
        class="w-[25px] mb-[10px]"
        src="@/assets/svg/magnifier.svg"
        alt="Circle and line as magnifier icon"
        title="Magnifier icon"
      >
      <span class="block font-openSans font-semibold text-darkGray text-[0.775rem]">
        zobacz
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  cardImagePath: {
    type: String,
    required: true,
  },
});
</script>
