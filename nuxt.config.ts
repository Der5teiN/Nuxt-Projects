// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,

  future: {
    compatibilityVersion: 4,
  },

  app: { pageTransition: { name: "page", mode: "out-in" } },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content"],

  colorMode: {
    classSuffix: "",
  },
});
