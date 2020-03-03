<!--
 * @Author: 随机文章
 * @Date: 2020-01-12 22:48:35
 * @LastEditTime : 2020-02-10 18:45:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/randomArticles.vue
 -->
<template>
  <div class="randomArticles">
    <container-one :title="'随机文章'">
      <div class="content">
        <ul>
          <li v-for="(item, index) in $store.state.side.randomArticles" :key="index">
            <span class="post-title">{{item.title}}</span>
            <span class="badge float-right">{{item.hot}}℃</span>
          </li>
        </ul>
      </div>
    </container-one>
  </div>
</template>

<script>
  import containerOne from '../public/containerOne.vue'
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
  }
</script>

<style lang="scss">
  .randomArticles {
    width: 100%;

    .content {
      font-size: 12px;
      padding-top: -1px;

      li {
        padding: 10px 15px;
        border-top: 1px solid;
        border-color: rgba(221, 221, 221, 0.5);
        box-sizing: border-box;

        &:first-child {
          border-top: 0;
        }

        .post-title {
          width: 75%;
          overflow: hidden;
          display: inline-block;
          height: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
        }


      }
    }
  }
</style>