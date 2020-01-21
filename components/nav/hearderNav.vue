<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-22 01:00:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/nav/hearderNav.vue
 -->
<template>
  <div>
    <dl class="navLists shadow-md">
      <dt class="inline-block"><a href="#" class="inline-block  text-center px-4 py-4">My blog</a></dt>
      <dd v-for="(item,key) in navDatas" class="inline-block" :class="{active:active===key}" @mouseleave="active=''"
        :key="'navList'+key">
        <a href="#" class="inline-block  text-center px-4 py-4" @mouseover="active=key">{{key}}</a>
        <template v-if="item">
          <child-list v-show="active==key" :list="item">
          </child-list>
        </template>
      </dd>
      <dd class="inline-block" v-show="power>1">
        <a href="/writeArticles" class="inline-block  text-center px-4 py-4">写文章</a>
      </dd>
    </dl>
  </div>
</template>

<script>
  import childList from './navChildList'
  export default {
    data() {
      return {
        power: '0',
        navDatas: {
          '首页': false,
          '技术类型': { 'JS': { 'sdas': '' }, 'python': { 'screpy': '' } },
          '留言板': false,
          '主题切换': false,
        },
        active: ''
      }
    },
    async mounted() {
      let {
        status,
        data: {
          power
        }
      } = await this.$axios.get('/users/getUser');
      if (status === 200) {
        this.power = power
      }
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
   dd{
    color: #fff;
    position: relative;
    &:hover{
      background-color: rgba(100,90,200,0.7);
      transition: 0.5s
    }
   }
 }
</style>