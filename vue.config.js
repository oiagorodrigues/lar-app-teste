const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/assets/styles')
      }
    }
  },

  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
          @import "~styles/utilities/variables";
          @import "~bootstrap/scss/mixins/breakpoints";
        `
      }
    }
  }
}
