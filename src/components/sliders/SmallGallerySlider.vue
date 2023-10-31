<template>
  <swiper-container
    :slides-per-view="'auto'"
    :loop="true"
    :centered-slides="true"
    :navigation="{
      nextEl: `.${nextEl}`,
      prevEl: `.${prevEl}`
    }"
    :breakpoints="{
      640: {
        loop: false,
        slidesPerView: 2,
        centeredSlides: false,
      },
      1024: {
        loop: false,
        slidesPerView: 3,
        centeredSlides: false,
      },
      1800: {
        loop: false,
        slidesPerView: 4,
        centeredSlides: false,
      }
    }"
  >
    <swiper-slide
      class="w-[313px] h-[163px] 3xl:w-[386px] 3xl:h-[211px]"
      v-for="galleryItem in imagesSource"
      :key="galleryItem.image"
    >
      <GalleryCard :card-image-path="galleryItem.image"  />
    </swiper-slide>

    <div slot="container-end">
      <button
        class="rotate-180 absolute top-[50%] left-[13px]
          translate-y-[-50%] z-[2]"
        :class="prevEl"
      >
        <img
          class="xl:w-[30px]"
          src="@/assets/svg/blackArrowIcon.svg"
          alt="Black arrow icon"
          title="Previous arrow icon"
        >
      </button>

      <button
        class="absolute top-[50%] right-[13px] translate-y-[-50%] z-[2]"
        :class="nextEl"
      >
        <img
          class="xl:w-[30px]"
          src="@/assets/svg/blackArrowIcon.svg"
          alt="Black arrow icon"
          title="Next arrow icon"
        >
      </button>
    </div>
  </swiper-container>
</template>

<script setup lang="ts">
import GalleryCard from '../cards/GalleryCard.vue';

export interface Props {
  nextEl: string,
  prevEl: string,
  imagesSource: { image: string }[]
}

withDefaults(defineProps<Props>(), {
  nextEl: '',
  prevEl: '',
  imagesSource: () => [],
});
</script>
