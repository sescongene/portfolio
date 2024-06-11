// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@pinia/nuxt",
    "nuxt-gtag",
  ],
  gtag: {
    id: 'G-WQ90HH1QR6'
  }
});
