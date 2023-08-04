<script setup>
import PageTitle from '@/components/PageTitle.vue'
import DownloadResumeButton from '@/components/DownloadResumeButton.vue'
import { computed } from 'vue'

const currentAge = computed(() => {
    var today = new Date()
    var birthDate = new Date("1992/02/04")
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }

    return age
})
</script>

<template>
  <section class="px-4 pb-24 bg-white dark:bg-zinc-700">
    <div class="container mx-auto">
      <PageTitle
        background-title="About Me"
        foreground-title="About Me"
      />
      <div>
        <div class="space-y-4 text-base text-center text-zinc-800 dark:text-zinc-100 lg:px-8">
          <p>
            I'm <span class="font-bold text-teal-700">Nikki Pelchat</span>, a {{ currentAge }} year old full-stack developer.
            I attained my Master of Applied Science in Software Systems Engineering from the University of
            Regina in 2020. My focus of study was in Artificial Intelligence, specifically Neural Networks
            and Deep Learning. My career's focus has been within web development, both front and backend.
          </p>
          <p>
            In my spare time I love reading, learning new things, and cooking and trying new foods and recipes.
            I do my own mechanical work which always lead to some funny stories, renos and repairs around the house,
            and enjoy gardening. Finally, I absolutely love to travel and watching my daughters experience new
            activities. Fun fact, the background photo at the top of my website is from my favorite trip, Iceland!
          </p>
        </div>
        <div class="mt-8 text-center">
          <DownloadResumeButton />
        </div>
      </div>
    </div>
  </section>
</template>
