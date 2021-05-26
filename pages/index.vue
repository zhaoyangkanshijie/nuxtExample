<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxtExample
      </h1>
      <h2 class="subtitle">
        My groundbreaking Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <nuxt-link to="/home">
        home
      </nuxt-link>
      <ul>
        <li v-for="item in items" :key="item">
          {{ item }}
        </li>
      </ul>
      <button @click="arrayChange()">
        test
      </button>
      <p>{{ result }}</p>
      <p>{{ $store.state.token }}</p>
      <el-radio v-model="radio" label="1">
        备选项
      </el-radio>
      <el-radio v-model="radio" label="2">
        备选项
      </el-radio>
      <img :src="img">
      <img :src="img2">
      <div id="deep">
        <el-input v-model="input" placeholder="请输入内容" />
      </div>
      <p>{{ prefix }}</p>
      <p>{{ token }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode, PropType } from 'vue'
import Logo from '~/components/Logo.vue'

interface ComplexMessage {
  title: string;
  okMessage: string;
  cancelMessage: string;
}

export default Vue.extend({
  components: {
    Logo
  },
  // middleware: 'stats',
  // 局部引入外部资源
  // head: {
  //   script: [
  //     {
  //       src:
  //           'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
  //     }
  //   ],
  //   link: [
  //     {
  //       rel: 'stylesheet',
  //       href: 'https://fonts.googleapis.com/css?family=Roboto'
  //     }
  //   ]
  // },
  props: {
    name: {
      type: String,
      default: ''
    },
    success: {
      type: String,
      default: ''
    },
    callback: {
      type: Function as PropType<() => void>,
      default: null
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      validator (message: ComplexMessage) {
        return !!message.title
      },
      default: null
    }
  },
  async fetch () {
    // const response = await this.$axios.get('https://training.tp-link.com.cn/api/values')
    // const fetchResult = response.data
    // const show = []
    // for (const key in fetchResult) {
    //   show.push(key)
    //   show.push(fetchResult[key])
    // }
    const show = ['1', '2', '3', '4', '5', '6']
    this.items = show
  },
  async asyncData (context) {
    // called every time before loading the component
    // const response = await context.app.$axios.get('https://training.tp-link.com.cn/api/values')
    // const result = response.data
    let result = 'test'
    result = await context.app.$requestCache({
      method: 'get',
      url: 'https://training.tp-link.com.cn/api/values'
    })
    return { result }
  },
  data () {
    return {
      msg: 'Hello',
      items: [''],
      timer: 0,
      result: '',
      radio: '1',
      img: require('~/assets/Search_normal.png'),
      img2: require('~/static/Search_normal.png'),
      input: 'a',
      prefix: 'test',
      token: 'token'
    }
  },
  computed: {
    // 需要标注
    greeting (): string {
      return this.greet() + '!'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
    // this.$axios.get('https://training.tp-link.com.cn/api/values').then((res) => {
    //   console.log(res.data)
    //   const data = res.data
    //   const show = []
    //   for (const key in data) {
    //     show.push(key)
    //     show.push(data[key])
    //   }
    //   console.log(show)
    //   this.items = show
    // })
  },
  created () {
    console.log('created')
    this.$axios.post('/api/getErr', { err: 'err.stack', hook: 'info' })
  },
  beforeMount () {
    console.log('beforeMount')
    // this.timer = setInterval(function () {
    //   console.log(new Date())
    // }, 3000)
  },
  mounted () {
    console.log('mounted')
    this.prefix = (this as any).urlPrefix
    this.token = this.$store.state.token
    this.$axios.get('/api2/values').then((data) => {
      console.log(data)
    })
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
    // clearInterval(this.timer)
  },
  methods: {
    // 需要标注有 `this` 参与运算的返回值类型
    greet (): string {
      return this.msg + ' world'
    },
    arrayChange (): void {
      // 可以更新
      // this.items = ['a','b','c'];
      // this.items = ['a1','a2','b'].filter((value,index)=>{
      //   return value.indexOf('a') != -1;
      // });
      // this.items = this.items.slice(1)
      // this.items = this.items.concat(['a1','b1','c1']);
      // 不可以更新
      // this.items[1] = 'b';
    }
  },
  // `createElement` 是可推导的，但是 `render` 需要返回值类型
  render (createElement): VNode {
    return createElement('div', this.greeting)
  }
})
</script>

<style lang="scss" scoped>
@import "../pageStyle/index.scss";
</style>
