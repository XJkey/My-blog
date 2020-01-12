<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-12 22:50:30
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
      <login style="margin-top: 30px;"></login>
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
  components:{
    articleList,
    search,
    login,
    updateRecord,
    randomArticles
  }
}
</script>

<style>
  .mainContent{
    display: inline-block;
    width: 780px;
    margin: 20px;
  }
  .side{
    display: inline-block;
    vertical-align: top;
    width: 360px;
    margin: 15px;
  }
</style>
