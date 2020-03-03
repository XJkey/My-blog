<!--
 * @Author: your name
 * @Date: 2020-01-12 22:35:50
 * @LastEditTime : 2020-02-10 19:23:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/newestMessage.vue
 -->
<template>
  <div class="newestMessage">
    <container-one :title="'最新评论'">
      <div class="content">
        <ul class="">
          <li class="newestMessageList" v-for='(item,index) in $store.state.side.newestMessage' v-tooltip.left="item.articleTitle||'留言板'">
            {{ $moment(item.createTime).format('L')}}
            {{item.username}}：{{item.content}}
          </li>
        </ul>
      </div>
    </container-one>
  </div>
</template>

<script>
  import containerOne from '../public/containerOne.vue';
  export default {
    components: {
      containerOne
    },
    data() {
      return {
      }
    },
    async mounted() {
 
    },
    methods: {
      tips: function (e, title) {
        let articleTitle = title ? title : '留言板'
      }
    }
  }
</script>


<style lang="scss">
  .newestMessage {
    width: 100%;

    .content {
      padding: 15px;
      font-size: 12px;
    }

    .newestMessageList {
      background: #eee;
      margin: 10px;
      padding: 10px;
      border-radius: 5px;
    }
  }
</style>