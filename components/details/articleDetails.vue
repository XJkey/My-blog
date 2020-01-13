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
    width: 750px;
    padding: 20px;
    z-index: 0;

    .markdown-body {
      color: #468847;
    }
  }

</style>
