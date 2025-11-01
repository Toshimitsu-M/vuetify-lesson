module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'docs',
  assetsDir: './',
  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/AnimeApp/' : '/',
  
}
