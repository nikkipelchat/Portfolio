<script setup>
const props = defineProps({
  time: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  stack: {
    type: Array,
    required: false,
    default: () => [],
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="p-6 border rounded border-zinc-300 dark:border-0 dark:bg-zinc-900">
    <div class="flex justify-between gap-x-10">
      <div class="inline-block px-2 text-xs leading-6 text-white bg-teal-700 rounded shrink-0 self-start">
        {{ time }}
      </div>
      <div v-if="props.stack" class="space-x-1">
        <div v-for="technology, index in props.stack" :key="index" class="inline-block px-2 text-xs leading-6 text-white bg-yellow-900 rounded">
          {{ technology }}
        </div>
      </div>
    </div>
    <h2 class="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300">
      {{ title }}
    </h2>
    <h2 v-if="props.subtitle" class="mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300">
      {{ subtitle }}
    </h2>
    <h4 class="text-sm font-bold text-yellow-700">
      {{ location }}
    </h4>
    <p class="mt-6 text-zinc-800 dark:text-zinc-400">
      {{ description }}
    </p>
  </div>
</template>
