<script setup>
import DownloadResumeButton from '@/components/DownloadResumeButton.vue'
</script>

<template>
  <section class="w-full h-full">
    <div class="z-10 flex flex-col items-center justify-center w-full h-full text-center text-gray-200">
      <div class="max-w-fit">
        <p class="text-xl lg:text-2xl text-left">
          hello, it's me...
        </p>
        <p class="mt-4 text-6xl font-bold lg:text-7xl text-center">
          Nikki Pelchat
        </p>
        <p class="mt-4 text-2xl text-right">
          located in Saskatchewan.
        </p>
        <div class="mt-8 items-center">
          <DownloadResumeButton :class="'btn-outline max-w-fit'" />
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-0 w-full h-full">
      <img
        class="object-cover w-full h-full"
        src="../assets/iceland.jpg"
      >
      <div class="absolute inset-0 bg-black bg-opacity-80" />
    </div>
  </section>
</template>
