import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f1bffb16 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages_home" */))
const _34aadf45 = () => interopDefault(import('..\\pages\\tsExample.vue' /* webpackChunkName: "pages_tsExample" */))
const _361b6d87 = () => interopDefault(import('..\\pages\\test\\home.vue' /* webpackChunkName: "pages_test_home" */))
const _9dc4e0a8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _f1bffb16,
    name: "home"
  }, {
    path: "/tsExample",
    component: _34aadf45,
    name: "tsExample"
  }, {
    path: "/test/home",
    component: _361b6d87,
    name: "test-home"
  }, {
    path: "/",
    component: _9dc4e0a8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
