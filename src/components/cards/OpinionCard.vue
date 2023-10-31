<template>
  <div
    class="w-[100%] h-[321px] mx-auto bg-white drop-shadow-[0_5px_30px_rgba(114,111,254,0.1)]
      3xl:h-[377px]"
  >
    <div
      class="w-[94%] h-[149px] mx-auto bg-no-repeat bg-cover bg-center translate-y-[-21px]
        border-b-[2px] border-r-[2px] border-purple 3xl:h-[175px] 3xl:translate-y-[-25px]"
      :style="`background-image: url('${authorImagePath}');`"
    ></div>

    <div
      class="flex flex-col justify-center px-[33px] pb-[20px] mt-[10px] 3xl:pl-[40px] 3xl:pr-0
        3xl:pb-[24px]"
    >
      <h4
        class="font-openSans font-semibold text-[1.06rem] text-left text-purple
          3xl:text-[1.125rem]"
      >
        <slot name="authorName"></slot>
      </h4>

      <p
        class="h-[63px] mt-[12px] mb-[25px] overflow-auto text-left font-roboto text-[0.75rem]
          text-darkGray leading-[21px] 3xl:text-[0.875rem] 3xl:leading-[25px] 3xl:mt-[14px]
          3xl:pr-[30px] 3xl:h-[75px]"
      >
        <slot name="opinionContent"></slot>
      </p>

      <RatingSquares :square-count="10" :rate="rateValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingSquares from '../utils/RatingSquares.vue';

defineProps({
  authorImagePath: {
    type: String,
    required: true,
  },
  rateValue: {
    type: Number,
    default: 0,
  },
});
</script>
