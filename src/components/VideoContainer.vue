<template>
  <div
    class="relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-[100%]
      before:h-[100%] before:bg-purple/70 before:z-[1]"
  >
    <video
      class="absolute min-w-[1000px] left-[50%] translate-x-[-50%]"
      :src="videoSource"
      loop
      muted
      ref="video"
    >
      {{ noSupportMsg }}
    </video>

    <button
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[1]"
      v-if="isVideoPaused"
      name="play-button"
      aria-label="play-button"
      @click="playVideo()"
    >
      <img
        class="2xl:w-[193px]"
        src="@/assets/svg/videoPlayButtonIcon.svg"
        alt="Two squares and triangle as design play button"
        title="Play Button"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';

defineProps({
  videoSource: {
    type: String,
    required: true,
  },
  noSupportMsg: {
    type: String,
    default: 'Your browser does not support the video tag',
  },
});

/** Video element  */
const video: Ref<HTMLVideoElement | null> = ref(null);
const isVideoPaused: Ref<boolean | undefined> = ref(true);

/** Play video element */
const playVideo = (): void => {
  video.value?.play();
  isVideoPaused.value = video.value?.paused;
};
</script>
