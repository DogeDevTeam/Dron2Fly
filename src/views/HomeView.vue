<template>
  <NavigationBar id="home" @galleryOpen="onGalleryOpen()" />

  <Transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <GalleryWindow v-if="isGalleryActive" @galleryClose="onGalleryClose()" />
  </Transition>

  <div class="xlg:flex">
    <!-- Left panel with navigation map -->
    <aside
      class="hidden relative basis-1/5 border-r-[1px] pr-[6%] border-r-darkGray/10
        before:w-[10px] before:h-[10px] before:rotate-45 before:translate-x-[50%]
        before:translate-y-[-50%] before:bg-lightGray before:absolute before:top-0
        before:right-0 xlg:block 3xl:basis-1/6 3xl:pr-[5%]"
    >
      <NavigationMap :nav-map-structure="navigationLinksStructure" />
    </aside>

    <!-- Main parts of page -->
    <div class="relative flex-1 basis-4/5 3xl:basis-5/6 min-w-0">
      <div
        class="absolute top-0 right-[81px] w-[1px] h-[40%] bg-lightGray/50
          lg:right-[254px]"
      >
        <div
          class="absolute left-[50%] top-[726px] w-[18px] h-[18px] translate-x-[-50%]
            rotate-45 bg-lightGray xl:top-[1050px] xl:w-[26px] xl:h-[26px]"
        ></div>

        <div
          class="absolute left-[50%] top-[788px] w-[9px] h-[9px] translate-x-[-50%]
            rotate-45 bg-lightGray xl:top-[1155px] xl:w-[12px] xl:h-[12px]"
        ></div>
      </div>

      <!-- Header section -->
      <header class="relative mx-[12px] mt-[12px] 2xl:mx-[40px] 2xl:mt-[40px]">
        <h1
          class="absolute left-[20px] top-[20px] w-[80%] font-barlow font-bold
            text-[2.188rem] text-white leading-[45px] z-[2] sm:text-[2.6rem] sm:leading-[55px]
            lg:w-[60%] xl:left-[40px] xl:top-[40px] xl:text-[3rem] xl:leading-[60px] 2xl:w-[80%]
            2xl:text-[4.6rem] 2xl:leading-[90px] 3xl:w-[90%] 3xl:text-[5.625rem]
            3xl:leading-[100px]"
        >
          <span class="text-cyan">{{ content.home.headerSection.mainHeading[0] }}</span>
          {{ content.home.headerSection.mainHeading[1] }}
          <span class="text-darkGray">{{ content.home.headerSection.mainHeading[2] }}</span>
          {{ content.home.headerSection.mainHeading[3] }}
        </h1>

        <VideoContainer
          class="w-[100%] h-[439px] xl:h-[550px] 2xl:h-[680px]"
          :video-source="previewBannerVideo"
        />

        <h2
          class="absolute bottom-[14px] right-[calc(20px+59px)] font-barlow
            font-semibold text-[1.625rem] text-white z-[2] sm:text-[1.8rem]
            xl:bottom-[26px] xl:right-[calc(20px+100px)] xl:text-[2.1rem] 2xl:text-[3rem]
            2xl:bottom-[20px] 3xl:bottom-[30px] 3xl:right-[calc(40px+157px)] 3xl:text-[4.375rem]"
        >
          <span class="text-darkGray">{{ content.home.headerSection.underHeading[0] }}</span>
          {{ content.home.headerSection.underHeading[1] }}
        </h2>

        <DoubleArrowButton
          class="absolute bottom-0 right-0 w-[59px] h-[59px] xl:w-[100px] xl:h-[100px]
            3xl:w-[157px] 3xl:h-[157px]"
        />
      </header>

      <main>
        <!-- Small gallery preview section -->
        <section class="mt-[55px] 2xl:mt-[45px]">
          <SmallGallerySlider
            class="sm:mx-[12px] 2xl:mx-[40px]"
            next-el="small-gallery-next"
            prev-el="small-gallery-prev"
            :images-source="content.home.gallerySection"
          />
        </section>

        <!-- Flying staff section -->
        <section id="flyingStaff" class="mt-[178px] mb-[166px] 2xl:mt-[177px] 2xl:mb-[198px]">
          <SectionHeading heading-text="Czym Latamy" />

          <swiper-container
            class="mt-[66px] mb-[36px] mx-[20px] sm:mx-[10%] md:mx-[15%] lg:mx-[5%] 2xl:mx-[10%]"
            :slides-per-view="1"
            :loop="true"
            :space-between="50"
            :pagination="{
              el: '.flying-staff-pagination',
              bulletActiveClass: 'flying-staff-bullet-active',
              clickable: true,
              renderBullet: (index: number, className: string) => {
                return `
                  <span
                    class='${className} inline-block w-[10px] h-[10px] !mr-[6px] opacity-[1]
                      rounded-none last:!mr-0 rotate-45 bg-purple xl:w-[19px] xl:h-[19px]
                      xl:!mr-[25px]'
                  ></span>`
              }
            }"
            :navigation="{
              nextEl: '.flying-staff-next',
              prevEl: '.flying-staff-prev'
            }"
          >
            <swiper-slide
              v-for="droneCard in content.home.flyingStaffSection"
              :key="droneCard.title"
            >
              <DroneSpecCard :drone-image-path="droneCard.image">
                <template #subTitle>{{ droneCard.subTitle }}</template>
                <template #droneModelName>{{ droneCard.title }}</template>
                <template #aboutDrone>{{ droneCard.description }}</template>
              </DroneSpecCard>
            </swiper-slide>

            <div
              class="flex justify-center items-center mt-[52px]"
              slot="container-end"
            >
              <button
                class="flying-staff-prev mr-[68px] xl:absolute xl:top-[50%] xl:left-0
                  xl:translate-y-[-50%] xl:z-[1]"
              >
                <img
                  class="xl:w-[35px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow left"
                  title="Previous arrow icon"
                >
              </button>

              <div class="flying-staff-pagination text-center" style="width: auto;"></div>

              <button
                class="flying-staff-next rotate-180 ml-[68px] xl:absolute xl:top-[50%]
                  xl:right-0 xl:translate-y-[-50%] xl:z-[1]"
              >
                <img
                  class="xl:w-[35px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow right"
                  title="Next arrow icon"
                >
              </button>
            </div>
          </swiper-container>
        </section>

        <!-- Offer section -->
        <section
          id="offer"
          class="relative pt-[90px] pb-[126px] bg-darkGray before:absolute before:top-0
          before:left-0 before:w-[30%] before:h-[100%] before:bg-darkGray
          before:translate-x-[calc(-100%-1px)] 2xl:pt-[52px] 2xl:pb-[146px] 3xl:pt-[75px]"
        >
          <div class="absolute top-0 right-[81px] w-[1px] h-[100%] bg-white lg:right-[254px]">
            <div
              class="absolute left-[50%] top-[42px] w-[19px] h-[19px] translate-x-[-50%]
                rotate-45 bg-white xl:w-[33px] xl:h-[33px] xl:top-[40px]"
            ></div>
          </div>

          <SectionHeading heading-text="Co Oferujemy" is-white />

          <div
            class="relative px-[20px] mt-[71px] sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-[17px]
              xl:grid-cols-3 xl:grid-rows-2 2xl:gap-[25px] 2xl:px-[40px] 2xl:mt-[44px]
              3xl:mt-[76px]"
          >
            <ThisImageBox
              class="before:bg-purple/30 mb-[17px] sm:mb-0"
              :bg-image-path="OfferBackgroundC"
            />

            <div
              class="flex justify-center items-center h-[218px] bg-purple text-white font-openSans
                font-bold text-[1.063rem] text-center px-[15%] mb-[17px] sm:mb-0 3xl:h-[325px]
                3xl:text-[1.563rem]"
            >
              {{ content.home.offerSection.firstService }}
            </div>

            <ThisImageBox
              class="before:bg-darkGray/30 mb-[17px] sm:mb-0"
              :bg-image-path="OfferBackgroundA"
            />

            <div
              class="flex justify-center items-center h-[218px] bg-cyan text-darkGray font-openSans
              font-bold text-[1.063rem] text-center px-[15%] mb-[17px] sm:mb-0 3xl:h-[325px]
              3xl:text-[1.563rem]"
            >
              {{ content.home.offerSection.secondService }}
            </div>

            <ThisImageBox
              class="before:bg-cyan/30 mb-[17px] sm:mb-0"
              :bg-image-path="OfferBackgroundB"
            />

            <div
              class="flex justify-center items-center h-[218px] border-purple border-[1.5px]
              bg-darkGray text-purple font-openSans font-bold text-[1.063rem] text-center px-[15%]
              3xl:h-[325px] 3xl:text-[1.563rem]"
            >
              {{ content.home.offerSection.thirdService }}
            </div>
          </div>
        </section>

        <!-- About us section -->
        <section id="aboutUs" class="my-[201px] 3xl:mt-[300px] 3xl:mb-[393px]">
          <SectionHeading heading-text="O Nas" />

          <div class="relative">
            <swiper-container
              class="mt-[74px] mx-[31px] xlg:mt-0"
              :speed="500"
              :space-between="50"
              :slides-per-view="1"
              :loop="true"
              :navigation="{
                nextEl: '.about-us-next',
                prevEl: '.about-us-prev'
              }"
            >
              <swiper-slide
                v-for="pilot in content.home.aboutUsSection"
                :key="pilot.pilotFullName"
              >
                <AboutCard :pilot-image-path="pilot.pilotImage">
                  <template #pilotName>{{ pilot.pilotFullName }}</template>
                  <template #aboutPilot>{{ pilot.pilotAbout }}</template>
                </AboutCard>
              </swiper-slide>
            </swiper-container>

            <div
              class="flex items-center absolute bottom-[6px] right-[28px] z-[1] xlg:bottom-[15px]
                md:right-[20%] xlg:right-[1%] 3xl:right-[10%] 3xl:bottom-[25px]"
            >
              <button class="about-us-prev mr-[47px] xlg:mr-[28vw] 3xl:mr-[32vw]">
                <img
                  class="xl:w-[30px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow icon"
                  title="Previous arrow icon"
                >
              </button>

              <button class="about-us-next rotate-180">
                <img
                  class="xl:w-[30px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow icon"
                  title="Next arrow icon"
                >
              </button>
            </div>
          </div>
        </section>

        <!-- Portfolio section -->
        <section id="portfolio" class="mb-[201px] 3xl:mb-[348px]">
          <SectionHeading class="mb-[76px] 2xl:mb-[59px]" heading-text="Portfolio" />

          <div
            class="relative mx-[12px] mb-[25px] p-[9px] border-[2px] border-purple 2xl:mx-[40px]
              2xl:mb-[40px]"
          >
            <VideoContainer
              class="w-[100%] h-[370px] xl:h-[450px] 2xl:h-[654px]"
              :video-source="portfolioPreviewVideo"
            />

            <h3
              class="absolute left-[9px] bottom-[9px] px-[48px] py-[11px] bg-white font-barlow
                font-semibold text-purple z-[1] xl:text-[1.2rem] 2xl:text-[2.8125rem] 2xl:px-[140px]
                2xl:py-[34px]"
            >
              {{ content.home.portfolioSection.mainVideoTitle }}
            </h3>
          </div>

          <SmallGallerySlider
            class="sm:mx-[12px] 2xl:mx-[40px]"
            next-el="portfolio-next"
            prev-el="portfolio-prev"
            :imagesSource="content.home.gallerySection"
          />
        </section>

        <!-- Opinions section -->
        <section class="mb-[269px]">
          <SectionHeading headingText="Opinie" />

          <div class="relative">
            <swiper-container
              class="mt-[70px] md:mx-[50px] xl:mx-[135px]"
              :space-between="19"
              :slides-per-view="'auto'"
              :loop="true"
              :centered-slides="true"
              :breakpoints="{
                640: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                1800: {
                  slidesPerView: 4,
                  centeredSlides: false,
                }
              }"
              :navigation="{
                nextEl: '.opinions-next',
                prevEl: '.opinions-prev'
              }"
            >
              <swiper-slide
                class="flex items-center w-[276px] h-[400px] 3xl:w-[324px] 3xl:h-[430px]"
                v-for="opinion in content.home.opinionsSection"
                :key="opinion.fullName"
              >
                <OpinionCard :author-image-path="opinion.avatarImage" :rate-value="opinion.rate">
                  <template #authorName>{{ opinion.fullName }}</template>
                  <template #opinionContent>{{ opinion.opinionText }}</template>
                </OpinionCard>
              </swiper-slide>
            </swiper-container>

            <div>
              <button
                class="opinions-prev absolute top-[50%] left-[8px] translate-y-[-50%] z-[1]
                  xl:left-[45px]"
              >
                <img
                  class="xl:w-[35px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow left"
                  title="Previous arrow icon"
                >
              </button>

              <button
                class="opinions-next rotate-180 absolute top-[50%] right-[8px] translate-y-[-50%]
                  z-[1] xl:right-[45px]"
              >
                <img
                  class="xl:w-[35px]"
                  src="@/assets/svg/purpleArrowIcon.svg"
                  alt="Purple arrow right"
                  title="Next arrow icon"
                >
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>

  <PrimaryFooter />
</template>

<script setup lang="ts">
import {
  onMounted, ref, watch, type Ref,
} from 'vue';

import {
  useScrollLock, set, get, useElementBounding,
} from '@vueuse/core';

import { useRoute, useRouter } from 'vue-router';

import NavigationBar from '../components/NavigationBar.vue';
import NavigationMap from '../components/NavigationMap.vue';
import VideoContainer from '../components/VideoContainer.vue';
import DoubleArrowButton from '../components/buttons/DoubleArrowButton.vue';
import PrimaryFooter from '../components/PrimaryFooter.vue';
import SectionHeading from '../components/SectionHeading.vue';
import DroneSpecCard from '../components/cards/DroneSpecCard.vue';
import OpinionCard from '../components/cards/OpinionCard.vue';
import AboutCard from '../components/cards/AboutCard.vue';
import GalleryWindow from '../components/gallery/GalleryWindow.vue';
import SmallGallerySlider from '../components/sliders/SmallGallerySlider.vue';

import ThisImageBox from '../components/cards/ThisImageBox.vue';

// eslint-disable-next-line import/no-unresolved, import/extensions
import navigationLinksStructure from '../router/navigationLinks';

// eslint-disable-next-line import/no-unresolved, import/extensions
import content from '../content';

import {
  previewBannerVideo, portfolioPreviewVideo,
  OfferBackgroundA, OfferBackgroundB, OfferBackgroundC,
// eslint-disable-next-line import/no-unresolved, import/extensions
} from '../assetsManagement';

const HOME_ID = '#home';
const FLYING_STAFF_ID = '#flyingStaff';
const OFFER_ID = '#offer';
const ABOUT_US_ID = '#aboutUs';
const PORTFOLIO_ID = '#portfolio';

const route = useRoute();
const router = useRouter();

/** Gallery window active state */
const isGalleryActive: Ref<boolean> = ref(false);

// Control body scroll
const body = document.querySelector('body') as HTMLBodyElement;
const isBodyLocked = useScrollLock(body);

/** Handle open gallery event */
const onGalleryOpen = (): void => {
  set(isGalleryActive, true);
  set(isBodyLocked, true);
};

/** Handle close gallery event */
const onGalleryClose = (): void => {
  set(isGalleryActive, false);
  set(isBodyLocked, false);
};

/** When open main page scroll to section with current hash */
const scrollTohashSection = () => {
  const currentSectionId: string = route.hash;
  if (currentSectionId) {
    document.querySelector(currentSectionId)?.scrollIntoView();
  }
};

/** Update hash based on section y position */
const setupSectionsHashWatcher = () => {
  const home = document.querySelector(HOME_ID) as HTMLElement;
  const flyingStaff = document.querySelector(FLYING_STAFF_ID) as HTMLElement;
  const offer = document.querySelector(OFFER_ID) as HTMLElement;
  const aboutUs = document.querySelector(ABOUT_US_ID) as HTMLElement;
  const portfolio = document.querySelector(PORTFOLIO_ID) as HTMLElement;

  const { y: homeY } = useElementBounding(home);
  const { y: flyingStaffY } = useElementBounding(flyingStaff);
  const { y: offerY } = useElementBounding(offer);
  const { y: aboutUsY } = useElementBounding(aboutUs);
  const { y: portfolioY } = useElementBounding(portfolio);

  watch(homeY, () => {
    if (get(homeY) === 0) {
      router.replace({ hash: HOME_ID });
    } else if (get(flyingStaffY) < 200 && get(flyingStaffY) > -100) {
      router.replace({ hash: FLYING_STAFF_ID });
    } else if (get(offerY) < 200 && get(offerY) > -100) {
      router.replace({ hash: OFFER_ID });
    } else if (get(aboutUsY) < 200 && get(aboutUsY) > -100) {
      router.replace({ hash: ABOUT_US_ID });
    } else if (get(portfolioY) < 200 && get(portfolioY) > -100) {
      router.replace({ hash: PORTFOLIO_ID });
    }
  });
};

onMounted(() => {
  scrollTohashSection();
  setupSectionsHashWatcher();
});
</script>

<style>
  .flying-staff-bullet-active {
    background-color: #58FEE6 !important;
  }
</style>
