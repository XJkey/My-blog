<!--
 * @Author: 随机文章
 * @Date: 2020-01-12 22:48:35
 * @LastEditTime : 2020-01-12 23:42:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/randomArticles.vue
 -->
<template>
  <div class="randomArticles" data-aos="fade-up">
    <container-one :title="'随机文章'">
      <div class="content">
        <ul class="">
          <li>
            <span class="post-title">20191123 向日葵：天空鹅卵石 更新汉化补丁v1.5</span>
            <span class="badge float-right">37,548 ℃</span>
          </li>
          <li>
            <span class="post-title">20191123 向日葵：天空鹅卵石 更新汉化补丁v1.5</span>
            <span class="badge float-right">37,548 ℃</span>
          </li>
          <li>
            <span class="post-title">20191123 向日葵：天空鹅卵石 更新汉化补丁v1.5</span>
            <span class="badge float-right">37,548 ℃</span>
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
    }
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
        }


      }
    }
  }
</style>