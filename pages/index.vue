<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-23 17:06:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/index.vue
 -->
<template>
  <div>
    <div class="mainContent">
      <article-list></article-list>
    </div>
    <div class="side">
      <search></search>
      <login :user='username' style="margin-top: 30px;"></login>
      <update-record></update-record>
      <random-articles></random-articles>
    </div>
  </div>
</template>

<script>
  import articleList from '../components/article/articleList'
  import search from '../components/side/search'
  import login from '../components/side/login'
  import updateRecord from '../components/side/updateRecord'
  import randomArticles from '../components/side/randomArticles'
  export default {
    components: {
      articleList,
      search,
      login,
      updateRecord,
      randomArticles
    },
    async asyncData(ctx) {
      let { status, data: { username, power } } = await ctx.$axios.get('/users/getUser');
      let { status: status1, data: data1 } = await ctx.$axios.get('/blogs/blogsList'+ctx.route.fullPath);
      console.log(214, data1)
      if (status === 200) {
        return { username, power }
      } else {
        return {
          username: '', power: 0
        }
      }


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