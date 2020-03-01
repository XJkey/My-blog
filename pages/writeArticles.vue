<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime: 2020-02-22 00:43:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/writeArticles.vue
 -->
<template>
  <div class="writeArticles">
    <div class="title flex">
      <input name="title" autocomplete="off" type="text" class="outline-none flex-grow" v-model="title"
        placeholder="请输入标题" />
      <input type="text" class="outline-none flex-grow-0" v-model="type" placeholder="请输入标签"
        style="width: 200px;margin-left: 20px;" />
      <button @click='submit' class="bg1 flex-grow-0" style="width: 100px;margin-left: 20px;">发布</button>
    </div>
    <no-ssr>
      <mavon-editor :previewBackground="'#dff0d8'" @change='change' v-model="content" style="height:600px;" />
    </no-ssr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        type: null,
        content: "",
        title: null,
        contentDOM: null
      }
    },
    methods: {
      submit: function () {

        let layerId = this.$layer.loading();
        let type = this.type ? this.type.split(',') : null;
        this.$axios.post('/blogs/create',
          { title: this.title, type, content: this.content, contentDOM: this.contentDOM })
          .then(({ status, data }) => {
            this.$layer.msg(data.msg, {
              time: 1
            }, id => {
              this.$layer.close(layerId);
              this.$layer.close(id);
              window.location.reload();
            }
            );

          }).catch(err => {
            let data = err.response.data;
            if (data.msg) {
              this.$layer.msg(data.msg);
            } else {
              this.$layer.msg('发布失败');
              this.$layer.close(layerId);
            }
          })
      },
      change: function (n, m) {
        this.contentDOM = m;
      }
    },
  }
</script>

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

    .markdown-body {
      color: #468847;
    }
  }
</style>