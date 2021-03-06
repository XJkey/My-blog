/*
 * @Author: your name
 * @Date: 2020-01-13 22:07:37
 * @LastEditTime : 2020-02-03 01:29:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/nuxt.config.js
 */

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'http://libs.baidu.com/jquery/2.0.0/jquery.min.js' },
      { src: '/js/jquery.mlensEN-1.0.js' },
      { src: '/js/inputFireworks.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/public.scss',
    '~/assets/css/font-awesome/css/font-awesome.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-mavon-editor', srr: false },
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/vue-layert' },
    { src: '@/plugins/moment' },
    { src: '@/plugins/vtip' },
    { src: '@/plugins/vtip' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    //browserBaseURL: 'http://www.hani.cool'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      "vee-validate/dist/rules",
      "vee-validate/dist/locale/zh_CN"
    ],
    styleResources: {
      scss: './assets/css/scssVariable.scss'
    },
    build: {
      extend(config, ctx) {
      }
    }

  }
}
