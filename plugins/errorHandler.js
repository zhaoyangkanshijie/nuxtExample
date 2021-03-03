import Vue from 'vue'
import axios from 'axios'

// 系统错误捕获
const getErr = async (err, _this, info) => {
  await axios.post('/api/getErr', { err: err.stack, hook: info })
}

const errorHandler = (error, vm, info) => {
  getErr(error, vm, info)
}

Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error, vm, info) => errorHandler(error, vm, info)
