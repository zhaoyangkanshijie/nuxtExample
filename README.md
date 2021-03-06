# nuxtExample

> My groundbreaking Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 教程

https://www.nuxtjs.cn

## ts bug 临时解决方案

Interface 'NuxtApp' incorrectly extends interface 'Vue'

tsconfig.json

compilerOptions :{"skipLibCheck": true}

## nuxt的pages自动路由原理

https://segmentfault.com/a/1190000014839730

https://www.nuxtjs.cn/guide/routing

## Nuxt配置sass或者less

https://www.jianshu.com/p/7a1d11c7d895

## vue typescript支持

https://cn.vuejs.org/v2/guide/typescript.html

## 使用nuxt封装的axios

https://axios.nuxtjs.org/

https://www.cnblogs.com/yddzyy/p/13269887.html

## 全局组件

https://segmentfault.com/a/1190000020452519?utm_source=tag-newest

## 生命周期

https://blog.csdn.net/webjhh/article/details/94460595

## 项目部署

https://segmentfault.com/a/1190000020452519?utm_source=tag-newest

https://blog.csdn.net/sophie_u/article/details/86690053

生产环境文件:.nuxt node_modules server/ static/(看是否有资源文件引用，assets同理) middleware/(如在/server/index.js有引用) nuxt.config.js package.json

npm run build

npm run start 成功后改用pm2

pm2 start npm --name "nuxtExample" -- run start --watch

## Classic mode for store/ is deprecated and will be removed in Nuxt 3.

https://www.bootschool.net/article/5c50895df60a310b0e6f33ee/nuxt.js-error-classic-mode-for-store-is-deprecated

## Build failing with Error "cross-env: Permission denied"

https://github.com/travis-ci/travis-ci/issues/7044

## 缓存

https://www.jianshu.com/p/421a3cf22415

https://my.oschina.net/u/158675/blog/4304453

## 前端渲染中间件

https://blog.csdn.net/awseda/article/details/106227729

## webpack优化和配置

https://zh.nuxtjs.org/docs/2.x/configuration-glossary/configuration-build

## nuxt.js使用v-for动态绑定img的src的本地路径，图片不能渲染

https://blog.csdn.net/qq_42231156/article/details/100071551

## typescript

https://segmentfault.com/a/1190000011744210

https://blog.csdn.net/sllailcp/article/details/102542796/

## pdf在线预览

https://blog.csdn.net/weixin_38312502/article/details/105577457

https://www.npmjs.com/package/vue-pdf

## nuxt.js项目中全局捕获异常并生成错误日志全过程

https://www.cnblogs.com/xinyan-666/p/9337742.html

https://www.cnblogs.com/antyhouse/p/12553073.html