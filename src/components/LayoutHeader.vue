<script setup>
import IconGithub from './icons/IconGithub.vue'
import IconLinkedin from './icons/IconLinkedin.vue'
import IconMenu from './icons/IconMenu.vue'
import { ref } from 'vue'

const navigationVisible = ref(false)

defineProps({
  activeLink: {
    type: String,
    required: true,
  },
})

function toggleNavigation() {
  navigationVisible.value = !navigationVisible.value
}
</script>

<template>
  <header class="sticky top-0 left-0 z-50 px-4 text-gray-200 bg-zinc-900 lg:h-screen lg:w-60 xl:w-80 lg:fixed">
    <!-- Mobile -->
    <div class="flex items-center justify-between h-16 lg:hidden">
      <h2 class="text-xl font-bold tracking-wider">
        Nikki Pelchat
      </h2>
      <div class="flex items-center">
        <a
          class="ml-4 hover:text-teal-600"
          title="Github"
          href="https://github.com/nikkipelchat"
          target="_blank"
        >
          <IconGithub class="w-4 h-4" />
        </a>
        <a
          class="ml-4 hover:text-teal-600"
          title="LinkedIn"
          href="https://ca.linkedin.com/in/nikki-pelchat"
          target="_blank"
        >
          <IconLinkedin class="w-4 h-4" />
        </a>
        <div
          class="ml-12 cursor-pointer"
          @click="toggleNavigation"
        >
          <IconMenu class="w-6 h-6" />
        </div>
      </div>
    </div>

    <nav
      class="fixed top-0 bottom-0 flex flex-col items-center justify-between w-full py-10 mt-16 transition-all duration-300 bg-zinc-900 lg:mt-0 lg:left-0 lg:w-60 xl:w-80"
      :class="navigationVisible ? 'left-0' : '-left-full'"
    >
      <div class="hidden md:flex md:flex-col md:items-center">
        <img
          class="object-cover w-48 h-48 border-8 rounded-full border-zinc-600 full"
          src="../assets/nikki.jpg"
          alt="Nikki Pelchat"
        >
        <h2 class="mt-2 text-2xl font-bold tracking-wider">
          Nikki Pelchat
        </h2>
      </div>

      <div class="w-full">
        <ul
          class="text-lg tracking-wider text-center"
          @click="toggleNavigation"
        >
          <li>
            <a
              class="block py-2 hover:text-teal-600"
              :class="activeLink === 'home' ? 'text-teal-700' : ''"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              class="block py-2 hover:text-teal-600"
              :class="activeLink === 'about' ? 'text-teal-700' : ''"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              class="block py-2 hover:text-teal-600"
              :class="activeLink === 'resume' ? 'text-teal-700' : ''"
              href="#resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              class="block py-2 hover:text-teal-600"
              :class="activeLink === 'portfolio' ? 'text-teal-700' : ''"
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      <div class="justify-center hidden h-6 space-x-8 md:flex">
        <a
          class="text-white hover:text-teal-600"
          href="https://github.com/nikkipelchat"
          target="_blank"
          title="Github"
        >
          <IconGithub />
        </a>
        <a
          class="text-white hover:text-teal-600"
          href="https://ca.linkedin.com/in/nikki-pelchat"
          target="_blank"
          title="LinkedIn"
        >
          <IconLinkedin />
        </a>
      </div>
    </nav>
  </header>
</template>
