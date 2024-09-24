const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-vue/'  // Ganti dengan nama repository GitHub kamu
    : '/' // local
})
