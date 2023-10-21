// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "assets/scss/destyle.scss",
    "assets/scss/main.scss"
  ],
  devtools: { enabled: false },
  ssr: false,
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/common.scss";',
                },
            },
        },
    },
})
