<script setup>
const props = defineProps({
  class: {
    type: String,
    default: 'btn-primary',
  },
})

const resumeURL = new URL('../assets/resume.pdf', import.meta.url).href
</script>

<template>
  <a class="btn" :class="props.class" :href="resumeURL" download="nikki-pelchat-resume">
    Download Resume
  </a>
</template>
