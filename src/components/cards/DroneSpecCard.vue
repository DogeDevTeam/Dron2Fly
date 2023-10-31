<template>
  <div class="lg:flex items-center justify-center">
    <div
      class="w-[100%] h-[300px] bg-no-repeat bg-cover bg-center lg:h-[400px] lg:bg-contain"
      :style="`background-image: url('${droneImagePath}')`"
    >
    </div>

    <div>
      <div>
        <p class="font-openSans font-semibold text-[1.125rem] text-purple xl:text-[1.25rem]">
          <slot name="subTitle"></slot>
        </p>

        <h4
          class="mb-[17px] font-openSans font-semibold text-[1.688rem] text-darkGray
            xl:text-[1.875rem]"
        >
          <slot name="droneModelName"></slot>
        </h4>
      </div>
      <p
        class="mb-[20px] font-roboto text-[0.875rem] leading-[26px] text-gray xl:text-[1rem]
          xl:w-[75%]"
      >
        <slot name="aboutDrone"></slot>
      </p>

      <div>
        <!-- TODO: Add spec points -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  droneImagePath: {
    type: String,
    required: true,
  },
});
</script>
