// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  modules: ["@nuxt/ui", "@nuxtjs/color-mode", "nuxt-icon", "@pinia/nuxt"],
});
