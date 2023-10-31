<template>
  <div class="fixed top-0 left-0 w-[100%] h-[100%] overflow-auto bg-darkGray z-10">
    <NavigationBar :in-gallery="true" @galleryClose="onGalleryClose()" />

    <!-- Main gallery container -->
    <div
      class="px-[22px] pb-[200px] mt-[126px] lg:px-[66px] xl:px-[12%] xl:pb-[350px] xl:mt-[178px]"
    >
      <h3
        class="mb-[25px] font-openSans font-semibold text-white text-[2.5rem] lg:text-[3.4375rem]
          xl:mb-[50px] xl:text-[4.375rem]"
      >
        Galeria
      </h3>

      <!-- Gallery images grid -->
      <div
        class="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:gap-[28px] xl:gap-[32px]
          xl:grid-cols-3"
      >
        <GalleryCard
          v-for="(galleryItem, index) in galleryGrid"
          :key="index"
          :class="galleryItem.classes"
          :image-path="galleryItem.image"
          :overlay-color="galleryItem.overlay" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '../NavigationBar.vue';
import GalleryCard from './GalleryCard.vue';

// eslint-disable-next-line import/no-unresolved, import/extensions
import {
  GalleryImageA, GalleryImageB, GalleryImageC, GalleryImageD,
// eslint-disable-next-line import/no-unresolved, import/extensions
} from '../../assetsManagement';

const emit = defineEmits(['galleryClose']);

type GalleryGridItem = {
  classes: string,
  image: string,
  overlay: string
}

/** Gallery grid structure */
const galleryGrid: GalleryGridItem[] = [
  { classes: '', image: GalleryImageA, overlay: 'gray' },
  { classes: 'md:row-span-2 xl:row-span-2', image: GalleryImageB, overlay: 'purple' },
  { classes: 'xl:row-span-3', image: GalleryImageC, overlay: 'cyan' },
  { classes: 'md:col-span-2 xl:col-span-1', image: GalleryImageD, overlay: 'cyan' },
  { classes: 'xl:col-span-2', image: GalleryImageA, overlay: 'white' },
  { classes: '', image: GalleryImageB, overlay: 'purple' },
  { classes: 'md:row-span-2 xl:row-span-1', image: GalleryImageC, overlay: 'cyan' },
  { classes: '', image: GalleryImageD, overlay: 'gray' },
  { classes: '', image: GalleryImageA, overlay: 'gray' },
  { classes: 'md:col-span-2', image: GalleryImageB, overlay: 'purple' },
];

/** Handle close gallery event */
const onGalleryClose = (): void => emit('galleryClose');
</script>
