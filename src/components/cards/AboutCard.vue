<template>
  <div
    class="xlg:flex xlg:items-center xlg:h-[450px] 3xl:ml-[164px] 3xl:mr-[225px]
      3xl:h-[650px]"
  >
    <div class=" md:mr-[20%] xlg:basis-2/3 xlg:mr-[10%] 3xl:mr-[25%]">
      <h4
        class="mb-[19px] font-openSans font-semibold text-[1.625rem] text-darkGray
          xl:text-[1.875rem]"
      >
        <slot name="pilotName"></slot>
      </h4>

      <p
        class="mb-[44px] font-roboto text-[0.875rem] text-gray leading-[30px]
          xl:text-[1rem] xl:mb-[35px]"
      >
        <slot name="aboutPilot"></slot>
      </p>

      <button
        class="w-[181px] py-[10px] border-[2px] border-purple font-openSans
          font-semibold text-purple text-[1rem]"
      >
        533 569 116
      </button>
    </div>

    <div class="relative hidden xlg:basis-1/3 xlg:block">
      <div class="w-[280px] h-[400px] bg-darkGray 3xl:w-[406px] 3xl:h-[607px]">
        <img
          class="absolute bottom-0 left-[-100px] w-[280px] h-auto 3xl:min-w-[440px]
            3xl:left-[-150px]"
          :src="pilotImagePath"
          alt="Human with drone controller"
          title="Drone Pilot"
        >
        <div
          class="absolute bottom-[-20px] left-[-30px] w-[280px] py-[25px] bg-purple
            font-openSans text-center font-semibold text-[1rem] text-white 3xl:w-[406px]
            3xl:left-[-44px] 3xl:py-[41px] 3xl:text-[1.25rem]"
        >
          <slot name="pilotName"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  pilotImagePath: {
    type: String,
    required: true,
  },
});
</script>
