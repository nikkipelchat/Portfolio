<script setup>
import PageTitle from '@/components/PageTitle.vue'
import DownloadResumeButton from '@/components/DownloadResumeButton.vue'
import ResumeCard from '@/components/ResumeCard.vue'
import SkillsBar from '@/components/SkillsBar.vue'
import { education, publications, experience, skills } from '@/helpers/data.js'
</script>

<template>
  <section class="px-4 pb-24 bg-zinc-100 dark:bg-zinc-800">
    <div class="container mx-auto">
      <PageTitle
        background-title="Resume"
        foreground-title="Resume"
      />

      <h2 class="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Education
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <ResumeCard
          v-for="item in education"
          :key="item.title"
          :time="item.time"
          :title="item.title"
          :subtitle="item.subtitle"
          :location="item.location"
          :description="item.description"
        />
      </div>

      <h2 class="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Publications and Conferences
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <ResumeCard
          v-for="item in publications"
          :key="item.title"
          :time="item.time"
          :title="item.title"
          :subtitle="item.subtitle"
          :location="item.location"
          :description="item.description"
        />
      </div>

      <h2 class="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Experience
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2">
        <ResumeCard
          v-for="item in experience"
          :key="item.title"
          :time="item.time"
          :title="item.title"
          :subtitle="item.subtitle"
          :location="item.location"
          :description="item.description"
        />
      </div>

      <h2 class="mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        Skills
      </h2>
      <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
        <SkillsBar
          v-for="skill in skills"
          :key="skill.title"
          :title="skill.title"
          :value="skill.value"
        />
      </div>

      <div class="mt-24 text-center">
        <DownloadResumeButton />
      </div>
    </div>
  </section>
</template>
