<template>
  <footer>
    <section
      class="px-[32px] pt-[95px] pb-[126px] bg-darkGray lg:px-[15%] 3xl:pt-[99px] 3xl:pb-[133px]
        3xl:px-[22%]"
    >
      <LogoIconDark class="w-[129px] mb-[44px] 2xl:w-[175px] 2xl:mb-[50px]" />

      <div class="text-white md:flex md:justify-between">
        <p
          class="mb-[55px] font-roboto text-[0.875rem] leading-[30px] text-white md:basis-[30%]
            2xl:text-[1rem] 2xl:leading-[35px]"
        >
          {{ content.footer.longFooterText }}
        </p>

        <div class="flex flex-col mb-[55px]">
          <a
            class="mb-[18px] font-openSans text-[1rem] font-normal 2xl:mb-[30px] 2xl:text-[1.25rem]"
            href="#home"
          >
            Strona Główna
          </a>

          <a
            class="mb-[18px] font-openSans text-[1rem] font-normal 2xl:mb-[30px] 2xl:text-[1.25rem]"
            href="#flyingStaff"
          >
            Czym Latamy
          </a>

          <a
            class="font-openSans text-[1rem] font-normal 2xl:text-[1.25rem]"
            href="#offer"
          >
            Co Oferujemy
          </a>
        </div>

        <div class="flex flex-col mb-[55px]">
          <a
            class="mb-[18px] font-openSans text-[1rem] font-normal 2xl:mb-[30px] 2xl:text-[1.25rem]"
            href="#aboutUs"
          >
            O Nas
          </a>

          <a
            class="font-openSans text-[1rem] font-normal 2xl:text-[1.25rem]"
            href="#portfolio"
          >
            Portfolio
          </a>
        </div>

        <div>
          <a
            class="flex items-center mb-[22px] last:mb-0 font-openSans text-[1rem] font-normal
              2xl:text-[1.25rem]"
            v-for="singleIcon in socialIconsData"
            :key="singleIcon.link"
            :href="singleIcon.link"
          >
            <component
              class="w-[25px] h-auto mr-[16px] fill-white 2xl:w-[28px]"
              :is="singleIcon.icon"
            />

            {{ singleIcon.text }}
          </a>
        </div>
      </div>
    </section>

    <section
      class="bg-purple py-[18px] px-[18%] font-roboto text-white text-[0.813rem]
        text-center 2xl:text-[1.125rem] 2xl:text-left 2xl:pl-[15%] 2xl:py-[36px] 3xl:pl-[22%]"
    >
      {{ content.footer.bottomBarText[0] }}
      <a class="text-cyan" href="http://stormcastle.pl" target="_blank">{{ content.footer.bottomBarText[1] }}</a>
    </section>
  </footer>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import LogoIconDark from './icons/LogoIconDark.vue';
import FacebookIcon from './icons/FacebookIcon.vue';
import YoutubeIcon from './icons/YoutubeIcon.vue';
import EmailIcon from './icons/EmailIcon.vue';
import InstagramIcon from './icons/InstagramIcon.vue';

// eslint-disable-next-line import/no-unresolved, import/extensions
import content from '../content';

/** Array of social media icons components */
const socialIconsData: Array<{ link: string, icon: Component, text: string }> = [
  { link: '#facebook', icon: FacebookIcon, text: 'Dron2Fly' },
  { link: '#youtube', icon: YoutubeIcon, text: 'Dron2Fly' },
  { link: '#email', icon: EmailIcon, text: 'dron2fly.kontakt@gmail.com' },
  { link: '#instagram', icon: InstagramIcon, text: 'Dron2Fly' },
];
</script>
