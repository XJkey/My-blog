<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-02-03 01:20:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/nav/hearderNav.vue
 -->
<template>
  <div class="navLists shadow-md">
    <dl style="width: 1300px; margin: 0 auto;">
      <dt class="inline-block">
        <a href="#" class="inline-block  text-center title">
            <p style="padding-top: 3px;">My-Blogs</p>
            <em>by XJkey</em>
        </a>
      </dt>
      <dd v-for="(item,key) in navDatas" class="inline-block" :class="{active:$route.path===item[1]}"
        @mouseleave="active=''" :key="'navList'+key">

        <a :href="item[1]" class="inline-block  text-center px-4 py-4" @mouseover="active=key"><i
            :class="item[2]"></i>{{key}}</a>
        <template v-if="item[0]">
          <child-list v-show="active==key" :list="item[0]">
          </child-list>
        </template>
      </dd>
      <dd class="inline-block" v-if="$store.state.user.user.power>1" :class="{active:$route.path==='/writeArticles'}">
        <a href="/writeArticles" class="inline-block  text-center px-4 py-4" target="_blank">发布博客</a>
      </dd>
    </dl>
  </div>
</template>

<script>
  import childList from './navChildList'
  export default {
    data() {
      return {
        navDatas: {
          '首页': [false, '/', 'fa fa-home'],
          '技术类型': [{
            'javascript': [{ 'nuxt.js': [false, '/?s=nuxt.js'] }, '/?s=javascript'],
            'python': [{ 'screpy': [false, '/?s=screpy'] }, '/?s=python']
          }, '', 'fa fa-book'],
          '留言板': [false, '/guestbook', 'fa fa-comments'],
          '主题切换': [false],
        },
        active: ''
      }
    },
    async mounted() {
    },
    components: {
      childList
    },
    methods: {

    }
  }
</script>

<style lang="scss" type="text/scss" scoped rel="stylesheet/scss">
  .navLists{
   background-color: rgba(10,10,0,0.7);
   .title {
      text-align: center;
      color: #fff;
      text-shadow: 0 0 .1em, 0 0 .3em;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      padding:0 20px;
      em {
        color: #bfc5d4;
        font-style: normal;
        font-size: 12px;
        display:block;
      }
    }

   dd{
    color: #fff;
    position: relative;
    vertical-align: top;
    &.active{
      background-color:rgba(138,43,226,0.7) !important;
    }
    &:hover{
      background-color: rgba(100,90,200,0.7);
      transition: 0.5s
    }
   }
 }
</style>