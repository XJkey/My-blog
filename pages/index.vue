<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-02-10 19:23:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/index.vue
 -->
<template>
  <div>
    <div class="mainContent">
      <article-list :articleListData='articleListData'></article-list>
    </div>
    <div class="side">

      <search></search>
      <login :user='username' style="margin-top: 30px;"></login>

      <newestMessage></newestMessage>
      <div data-aos="fade-up">
        <random-articles></random-articles>
      </div>
    </div>
  </div>
</template>

<script>
  import articleList from '../components/article/articleList'
  import search from '../components/side/search'
  import login from '../components/side/login'
  import newestMessage from '../components/side/newestMessage'
  import randomArticles from '../components/side/randomArticles'
  export default {
    components: {
      articleList,
      search,
      login,
      newestMessage,
      randomArticles
    },
    async asyncData(ctx) {
      let obj = {}
      let { status, data: { username, power } } = await ctx.$axios.get('/users/getUser');
      if (status === 200) {
        obj = { username, power }
      } else {
        obj = { username: '', power: 0 }
      }


      let { status: status1, data } = await ctx.$axios.get('/blogs/blogsList?' + ctx.route.fullPath.split('?')[1]);
      if (status1 === 200) {
        obj.articleListData = data
      } else {
        obj.articleListData = []
      }

      return obj
    },
    mounted() {
      window.scrollTo(0, 1)
    },

  }

</script>

<style>
  .mainContent {
    display: inline-block;
    width: 780px;
    margin: 20px;
  }

  .side {
    display: inline-block;
    vertical-align: top;
    width: 360px;
    margin: 15px;
  }
</style>