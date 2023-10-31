<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
// eslint-disable-next-line import/no-unresolved
import { register } from 'swiper/element/bundle';

register();
</script>
