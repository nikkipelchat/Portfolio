import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import ResumeView from "@/views/ResumeView.vue"
import PortfolioView from "@/views/PortfolioView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeView,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioView,
    },
  ],
})

export default router
