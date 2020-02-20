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
          <li class="newestMessageList" v-for='(item,index) in message' v-tooltip.left="item.articleTitle||'留言板'">
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
        message: []
      }
    },
    async mounted() {
      let { status, data } = await this.$axios.get('/message/newestList');
      if (status === 200) {
        this.message = data.data;
      }

    },
    methods: {
      tips: function (e, title) {
        console.log(e)
        let articleTitle = title ? title : '留言板'
        // this.$layer.tips(articleTitle, e, {
        //   tips: 0,
        //   time: 100
        // });
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