<script setup>
import { computed } from 'vue'

const currentYear = computed(() => {
    var today = new Date()
    var year = today.getFullYear()
    return year
})
</script>

<template>
  <div class="px-4 py-16 bg-white dark:bg-zinc-700">
    <div class="container mx-auto">
      <p class="text-center text-zinc-800 dark:text-zinc-100">
        Copyright © {{ currentYear }} <span class="font-bold text-teal-700">Nikki</span>. All Rights Reserved.
      </p>
    </div>
  </div>
</template>
