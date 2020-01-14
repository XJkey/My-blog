<!--
 * @Author: your name
 * @Date: 2020-01-13 22:07:37
 * @LastEditTime : 2020-01-14 00:39:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/details/articleDetails.vue
 -->
<template>
  <div class="articleDetails mybody3">
    <breadCrumb></breadCrumb>
    <h1 class="title">秋天的谎言 -The only neat thing to do-</h1>
    <div class="articleTag text-center">
      <span class="smallLabel bg1">javascript,webstrom</span>
      <span class="smallLabel bg1"> 37,548 ℃</span>
    </div>
    <no-ssr>
      <mavon-editor :previewBackground="'#dff0d8'" @save='$save' :toolbarsFlag=false :defaultOpen="'preview'" :subfield=false
        :editable=false v-model="handbook" />
    </no-ssr>
  </div>
</template>

<script>
  import breadCrumb from '../public/breadCrumb.vue'
  export default {
    data() {
      return {
        handbook: "\n**目录 (Table of Contents)**\n\n[TOCM]\n\n[TOC]\n\n# Heading 1\n\n# Heading 1\n## Heading 2               \n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n# Heading 1 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n## Heading 2 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n### Heading 3 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n#### Heading 4 link [Heading link](https://github.com/pandao/editor.md \"Heading link\") Heading link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n##### Heading 5 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n###### Heading 6 link [Heading link](https://github.co"
      };
    },
    components: {
      breadCrumb
    },
    methods: {
        // 绑定@imgAdd event
        $save(value, render){
            console.log(JSON.stringify(value))
        }
  }
}

</script>

<style lang="scss">
  .articleDetails {
    padding: 20px;
    z-index: 0;
    .title{
      color: #3d4450;
      text-align:center;
      font-weight: 400;
      font-size:32px;
    }
    .articleTag{
      margin: 10px 0;
    }
    .markdown-body {
      color: #468847;
    }
  }

</style>
