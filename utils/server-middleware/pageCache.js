const LRU = require('lru-cache')

export const cachePage = new LRU({
  max: 100, // 缓存队列长度 最大缓存数量
  maxAge: 1000 // 缓存时间 单位：毫秒
})

export default function (req, res, next) {
  const url = req._parsedOriginalUrl
  const pathname = url.pathname
  if (process.env.NODE_ENV !== 'development') {
    console.log('pageCache', pathname, cachePage)
    const existsHtml = cachePage.get(pathname)
    if (existsHtml) {
    //  如果没有Content-Type:text/html 的 header，gtmetrix网站无法做测评
      res.setHeader('Content-Type', ' text/html; charset=utf-8')
      return res.end(existsHtml.html, 'utf-8')
    } else {
      res.original_end = res.end
      res.end = function (data) {
        if (res.statusCode === 200) {
        // 设置缓存
          cachePage.set(pathname, {
            html: data
          })
        }
        res.original_end(data, 'utf-8')
      }
    }
  }
  next()
}
