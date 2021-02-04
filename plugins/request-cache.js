import axios from 'axios'
import LRU from 'lru-cache'

// 给api加3秒缓存
const CACHED = new LRU({
  max: 1000,
  maxAge: 1000
})

const request = (config) => {
  // 服务端才加缓存，浏览器端就不管了
  // if (config.cache && !process.browser) {}
  const { params = {}, data = {} } = config
  const key = config.method + config.url + JSON.stringify(params) + JSON.stringify(data)
  if (CACHED.has(key)) {
    // 缓存命中
    return Promise.resolve(CACHED.get(key))
  }
  return axios(config)
    .then((rsp) => {
      CACHED.set(key, rsp.data)
      return rsp.data
    })
}

// const callback = (string) => {
//   console.log('That was easy!', string)
// }

// 只注入服务端
// export default ({ app }, inject) => {
//   // Set the function directly on the context.app object
//   app.requestCache = callback
// }
// 注入服务端和浏览器端
export default ({ app }, inject) => {
  inject('requestCache', request)
}
