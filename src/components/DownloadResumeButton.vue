<script setup>
defineProps({
  class: {
    type: String,
    default: 'btn-primary',
  },
})
</script>

<template>
  <a class="btn" :class="class" href="/resume.pdf" download="nikki-pelchat-resume">
    Download Resume
  </a>
</template>
