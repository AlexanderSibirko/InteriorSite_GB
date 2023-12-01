const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    // disable hashes in filenames
    // build: {
      // assetsPublicPath: '/',
      // assetsSubDirectory: 'img',
      // },
    filenameHashing: false,
    // // delete HTML related webpack plugins
    // chainWebpack: config => {
    //   config.plugins.delete('html')
    //   config.plugins.delete('preload')
    //   config.plugins.delete('prefetch')
    // }
})
