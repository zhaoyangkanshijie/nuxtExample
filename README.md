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

生产环境文件:.nuxt node_modules server/ static/ middleware/(如在/server/index.js有引用) nuxt.config.js package.json

npm run build

npm run start 成功后改用pm2

pm2 start npm --name "nuxtExample" -- run start

## Classic mode for store/ is deprecated and will be removed in Nuxt 3.

https://www.bootschool.net/article/5c50895df60a310b0e6f33ee/nuxt.js-error-classic-mode-for-store-is-deprecated