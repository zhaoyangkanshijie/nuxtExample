/*
** 只在生产模式的客户端中使用
*/
if (process.client && process.env.NODE_ENV === 'production') {
  /*
  ** baidu 统计分析脚本
  */
  const _hmt = _hmt || [];
  (function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?xxxxxxxxxxx'
    hm.id = 'baidu_tj'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

export default ({ app: { router }, store }) => {
  /*
  ** 每次路由变更时进行pv统计
  */
  if (process.client && process.env.NODE_ENV === 'production') {
    router.afterEach((to, from) => {
      const _hmt = _hmt || [];
      (function () {
        document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
        const hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?xxxxxxxxxxx'
        hm.id = 'baidu_tj'
        const s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(hm, s)
      })()
    })
  }
}
