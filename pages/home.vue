<template>
  <div class="container">
    <h1 class="red">
      Hello {{ name }}!
    </h1>
    <nuxt-link to="/">
      首页
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'blog',
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  // async asyncData ({ app, params }) {
  //   // called every time before loading the component
  //   const { data } = await app.axios.get(`https://my-api/posts/${params.id}`)
  //   return { title: data.title }
  // },
  data () {
    return {
      name: 'Hello'
    }
  }
})
</script>

<style lang="scss" scoped>
  @import "../pageStyle/index.scss";
</style>
