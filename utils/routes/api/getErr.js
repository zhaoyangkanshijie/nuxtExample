const fs = require('fs')
const router = require('koa-router')()

router.post('/api/getErr', async (ctx, next) => {
  const time = new Date()
  fs.writeFile(
    './logs/' + time.getTime() + '.txt',
    '报错内容:' + ctx.request.body.err + '\r\n' +
    '所在钩子:' + ctx.request.body.hook + '\r\n' +
    '报错时间:' + time.toLocaleString() + '\r\n',
    (err) => {
      if (err) { throw err }
    })
  ctx.body = {
    e: ctx.request.body
  }
})

module.exports = router
