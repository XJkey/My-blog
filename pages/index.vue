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
      <login :user='$store.state.user.user.username' style="margin-top: 30px;"></login>
      
      <div data-aos="fade-up" style="margin-top: 30px;">
        <newestMessage></newestMessage>
      </div>

      <div data-aos="fade-up" style="margin-top: 30px;">
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

      let { status: status1, data } = await ctx.$axios.get('/blogs/blogsList?' + ctx.route.fullPath.split('?')[1]);
      if (status1 === 200) {
        obj.articleListData = data
      } else {
        obj.articleListData = []
      }

      return obj
    },
    mounted() {
      console.log(this.$store.state.user.user)
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
    margin-top: 60px;
  }
</style>