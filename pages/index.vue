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
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
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
        <li v-for="item in items" :key="item">{{item}}</li>
      </ul>
      <button @click="arrayChange()">test</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VNode, PropType } from 'vue'
import Logo from '~/components/Logo.vue'

interface ComplexMessage {
  title: string,
  okMessage: string,
  cancelMessage: string
}

export default Vue.extend({
  components: {
    Logo
  },
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
  data () {
    return {
      msg: 'Hello',
      items: ['']
    }
  },
  computed: {
    // 需要标注
    greeting (): string {
      return this.greet() + '!'
    }
  },
  methods: {
    // 需要标注有 `this` 参与运算的返回值类型
    greet (): string {
      return this.msg + ' world'
    },
    arrayChange(): void {
      //可以更新
      //this.items = ['a','b','c'];
      // this.items = ['a1','a2','b'].filter((value,index)=>{
      //   return value.indexOf('a') != -1;
      // });
      //this.items = this.items.slice(1)
      //this.items = this.items.concat(['a1','b1','c1']);
      //不可以更新
      //this.items[1] = 'b';
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
    this.$axios.get("https://training.tp-link.com.cn/api/values").then(res=>{
        console.log(res.data)
        let data = res.data;
        let show = [];
        for(let key in data){
          show.push(key);
          show.push(data[key]);
        }
        console.log(show);
        this.items = show;
    })
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed(){
    console.log('destroyed')
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
