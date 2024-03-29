import colors from 'vuetify/lib/util/colors';
require('dotenv').config();
const pkg = require('./package');

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Vizinga!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  loadingIndicator: {
    name: 'cube-grid',
    color: 'black',
    background: colors.yellow.darken1,
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/style/app.styl', '~/assets/style/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/force-ssl',
    '@/plugins/codemirror',
    '@/plugins/vuetify',
    { src: '~plugins/vuex-persistedstate.js', ssr: false },
    { src: '~plugins/clipboard.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  toast: {
    duration: 1000,
    className: ['success'],
  },

  env: {
    BITLY_TOKEN: process.env.BITLY_TOKEN,
    HOMEPAGE: pkg.homepage,
    VERSION: pkg.version,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
