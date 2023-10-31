<template>
  <nav
    class="flex items-center pl-[31px] border-b-[1px] lg:pl-[50px]
      justify-between 3xl:pl-0"
    aria-label="Main navigation"
    :class="inGallery ? 'border-purple' : 'border-darkGray/10'"
  >
    <!-- Menu button -->
    <button
      class="lg:hidden"
      name="Menu button"
      v-if="!inGallery"
      @click="activateMenu()"
    >
      <img
        src="@/assets/svg/menuIcon.svg"
        alt="Three lines in different sizes as menu icon"
        title="Menu icon"
      >
    </button>

    <!-- Logo -->
    <RouterLink class="flex-1 lg:flex-none" to="/" :class="!inGallery ? 'flex-1' : 'flex-none'">
      <component
        class="w-[81px] mx-auto md:mx-0 md:ml-[35px] lg:ml-0 xl:w-[100px] 3xl:w-[140px]
          3xl:ml-[76px]"
        :is="!inGallery ? LogoIcon : LogoIconDark"
      />
    </RouterLink>

    <!-- Container for all navigation links -->
    <div
      class="fixed left-0 top-0 bg-darkGray/30 w-[100%] h-[100%] min-h-[500px] z-10
        opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards] lg:block lg:animate-none
        lg:opacity-[1] lg:bg-darkGray/0 lg:relative lg:min-h-0 lg:w-auto lg:flex-1"
      :class="showHideElement"
      v-if="!inGallery"
    >
      <!-- Side menu container -->
      <div
        class="w-[246px] min-h-[500px] h-[100%] bg-white opacity-0 translate-x-[-100%]
          animate-slideRight sm:w-[350px] lg:block lg:animate-none lg:opacity-[1] lg:translate-x-0
          lg:bg-white/0 lg:w-auto lg:min-h-0"
        :class="showHideElement"
      >
        <!-- Side menu header -->
        <div class="flex items-center justify-between h-[69px] px-[31px]
          border-b-[1px] border-darkGray/10 lg:hidden"
        >
          <button name="Exit button" @click="deactivateMenu()">
            <img src="@/assets/svg/exitIcon.svg" alt="Cross icon as exit icon" title="Exit icon">
          </button>
          <LogoIcon class="w-[54px]" />
        </div>

        <!-- Main links container -->
        <div class="pl-[31px] pt-[58px] lg:p-0 lg:flex lg:justify-end lg:mr-[100px] 3xl:mr-[201px]">
          <a
            class="block relative mb-[25px] font-openSans text-[0.938rem] text-purple font-semibold
              transition-[color] before:hidden before:absolute before:left-[-14px] before:top-[50%]
              before:w-[7px] before:h-[7px] before:translate-y-[-50%] before:rotate-45
              before:bg-cyan lg:mb-0 lg:h-[68px] lg:flex lg:items-center lg:px-[20px]
              lg:text-darkGray lg:hover:text-purple after:hidden after:w-[100%] after:h-[8px]
              after:bg-purple after:absolute after:top-0 after:left-0 after:translate-y-[-100%]
              hover:after:translate-y-0 after:transition-transform xlg:after:block xl:h-[90px]
              xl:text-[1rem] xl:after:h-[10px] 2xl:text-[1.125rem] 3xl:h-[118px]"
            v-for="linkData in navigationLinksStructure"
            :key="linkData.path"
            :href="linkData.path"
          >
            {{ linkData.text }}
          </a>
        </div>

        <!-- Side menu social links -->
        <div class="flex absolute bottom-[31px] left-[31px] lg:hidden">
          <a
            class="flex justify-center items-center w-[31px] h-[31px]
              bg-purple/10 mr-[5px] last:mr-0"
            v-for="singleIcon in socialIconsData"
            :key="singleIcon.link"
            :href="singleIcon.link"
          >
            <component class="w-[14px] h-auto fill-purple" :is="singleIcon.icon"></component>
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery button -->
    <button
      class="flex justify-center items-center bg-darkGray relative w-[82px] h-[68px]
        lg:w-[100px] xlg:w-[130px] xl:w-[200px] xl:h-[90px] 3xl:w-[254px] 3xl:h-[118px]"
      @click="!inGallery ? openGallery() : closeGallery()"
      :class="inGallery ? ' border-l-[1px] border-purple' : ''"
    >
      <img
        class="xl:w-[80px] 3xl:w-[108px]"
        src="@/assets/svg/dronIcon.svg"
        alt="Drone icon"
        title="Drone icon"
        v-if="!inGallery"
      >

      <img
        class="xlg:mr-[12px] xl:w-[28px]"
        src="@/assets/svg/exitIcon.svg"
        alt="Cross icon as exit icon"
        title="Exit icon"
        v-if="inGallery"
      >

      <span
        class="absolute text-purple font-openSans font-bold text-[0.875rem] tracking-[1px]
          xl:text-[1.2rem] 3xl:text-[1.563rem]"
        :class="inGallery ? ' hidden xlg:block xlg:static': ''"
      >
        {{ !inGallery ? 'Galeria' : 'Zamknij' }}
      </span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import {
  ref, type Ref, type Component, computed,
} from 'vue';
import { useScrollLock } from '@vueuse/core';
import { RouterLink } from 'vue-router';
import LogoIcon from './icons/LogoIcon.vue';
import LogoIconDark from './icons/LogoIconDark.vue';
import FacebookIcon from './icons/FacebookIcon.vue';
import YoutubeIcon from './icons/YoutubeIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';

// eslint-disable-next-line import/no-unresolved, import/extensions
import navigationLinksStructure from '../router/navigationLinks';

defineProps({
  inGallery: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['galleryOpen', 'galleryClose']);

const BLOCK_CLASS_NAME = 'block';
const HIDDEN_CLASS_NAME = 'hidden';

// Scroll control
const body = document.querySelector('body') as HTMLBodyElement;
const isBodyLocked = useScrollLock(body);

/** Menu active state */
const isActive: Ref<boolean> = ref(false);

/** Array of social media icons components */
const socialIconsData: Array<{ link: string, icon: Component }> = [
  { link: '#facebook', icon: FacebookIcon },
  { link: '#youtube', icon: YoutubeIcon },
  { link: '#email', icon: EmailIcon },
  { link: '#instagram', icon: InstagramIcon },
];

/** Based on inActive state return 'hidden' or 'block' class */
const showHideElement = computed<string>(() => (
  isActive.value ? BLOCK_CLASS_NAME : HIDDEN_CLASS_NAME
));

/** Activate side menu */
const activateMenu = (): void => {
  isActive.value = true;
  isBodyLocked.value = true;
};

/** Deactivate side menu */
const deactivateMenu = (): void => {
  isActive.value = false;
  isBodyLocked.value = false;
};

/** Emit open gallery event */
const openGallery = (): void => emit('galleryOpen');

/** Emit close gallery event */
const closeGallery = (): void => emit('galleryClose');
</script>
