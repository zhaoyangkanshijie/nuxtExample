const LRU = require('lru-cache')
module.exports = {
  mode: 'universal',
  render: {
    bundleRenderer: {
      cache: LRU({
        max: 1000, // 最大的缓存个数
        maxAge: 1000 * 60 * 15 // 缓存15分钟
      })
    }
  },
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/lib-components'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: './assets/variables.scss'
    // sass: ...
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxy: true,
    // prefix: '/api/',
    // credentials: true
  },
  // proxy: {
  //   '/api/': {
  //     target: 'https://h5api.zhefengle.cn',//这个网站是开源的可以请求到数据的
  //     pathRewrite: {
  //        '^/api/': '/',
  //        changeOrigin: true
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  /*
   ** 服务器端中间件--做缓存
   */
  serverMiddleware: [
    {
      path: '*',
      handler: '~/utils/server-middleware/pageCache.js'
    }
  ],
  build: {
    transpile: [/^element-ui/], // babel编译指定模块
    // analyze: true,
    optimization: {
      minimize: true, // tree-shaking
      splitChunks: {
        chunks: 'all'
      } // 分包
    },
    parallel: true, // 多线程build，实验属性
    sourceMap: false, // 索源文件
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
