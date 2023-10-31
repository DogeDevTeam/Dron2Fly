<template>
  <div
    class="flex flex-col sticky top-[223px] z-[1] xl:top-[calc(223px+90px)]
      3xl:top-[calc(223px+118px)]"
    ref="mapItems"
  >
    <a
      class="flex justify-end items-center relative mb-[30px] group/item before:w-[1px]
        before:h-[33px] before:absolute before:right-[7px] before:top-[calc(100%-2px)]
        last:before:hidden before:transition-colors before:duration-300 2xl:mb-[58px]
        2xl:before:h-[60px] 2xl:before:right-[12px]"
      :class="isInOfferSection ? 'before:bg-white/30' : 'before:bg-purple/30'"
      v-for="mapItem in navMapStructure"
      :key="mapItem.path"
      :href="mapItem.path"
      :id="`map_${mapItemId(mapItem.path)}`"
    >
      <span
        class="mr-[16px] transition-all duration-300 group-hover/item:translate-x-[-10px]
          font-openSans font-semibold text-[0.8rem] 2xl:text-[0.938rem]"
        :class="isInOfferSection
          ? 'text-white group-hover/item:text-cyan'
          : 'text-purple group-hover/item:text-gray'"
      >
        {{ mapItem.text }}
      </span>
      <div
        class="w-[15px] h-[15px] rotate-45 transition-colors duration-300 group-hover/item:bg-cyan
          2xl:w-[25px] 2xl:h-[25px]"
        :class="isMapItemActivated(mapItem.path)
          ? 'bg-cyan'
          : isInOfferSection ? 'bg-white' : 'bg-purple'"
      ></div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding, get, set } from '@vueuse/core';
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

defineProps({
  navMapStructure: {
    required: true,
    type: Array<{ path: string, text: string }>,
  },
});

let offerSection: HTMLElement;
const mapItems = ref(null);
const isInOfferSection = ref(false);

/**
 * Prepare map item id based on full path
 * @param path single item hash
 */
const mapItemId = (path: string): string => path.replace('#', '');

/**
 * Check if map item is activated based on current hash
 * @param path single item hash
 */
const isMapItemActivated = (path: string): boolean => path === route.hash;

/** Add watcher that controll if map component is in offer section or not */
const setupMapOverlapController = (): void => {
  offerSection = document.querySelector('#offer') as HTMLElement;

  // Get bounding data from offer section and mapItems container
  const { top: offerSectionTop, bottom: offerSectionBottom } = useElementBounding(offerSection);
  const { top: mapItemsTop, bottom: mapItemsBottom } = useElementBounding(mapItems);

  watch(offerSectionTop, () => {
    set(isInOfferSection, get(mapItemsTop) > get(offerSectionTop)
      && get(mapItemsBottom) < get(offerSectionBottom));
  });
};

onMounted(() => setupMapOverlapController());
</script>
