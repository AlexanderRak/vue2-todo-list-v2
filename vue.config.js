/* eslint-disable quotes */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   publicPath: process.env.NODE_ENV === 'production' ? '/vue2-doto-list/' : '/',
   transpileDependencies: true,
   css: {
      loaderOptions: {
         sass: {
            additionalData: `@import "@/assets/styles/main.sass"`
         }
      }
   }
})
