<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime : 2020-01-16 00:05:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/writeArticles.vue
 -->
<template>
  <div class="writeArticles">
    <div class="title flex">
      <input type="text" class="outline-none flex-grow"  placeholder="请输入标题">
      <input type="text" class="outline-none flex-grow-0" placeholder="请输入标签" style="width: 200px;;margin-left: 20px;">
      <button class="bg1 flex-grow-0" style="width: 100px;margin-left: 20px;">发布</button>
    </div>
    <no-ssr>
      <mavon-editor style="height:600px;" />
    </no-ssr>
  </div>
</template>

<style lang="scss">
  .writeArticles {
    width: 1200px;
    margin: 30px auto;

    .title {
      padding: 20px 0;

      input {
        background-color: #fbfbfb;
      }

      button {
        background-color: $color1
      }
    }
  }

</style>
