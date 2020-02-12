<!--
 * @Author: your name
 * @Date: 2020-01-13 22:07:37
 * @LastEditTime : 2020-02-03 00:38:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/details/articleDetails.vue
 -->
<template>
  <div class="articleDetails mybody3">
    <breadCrumb :crumbData='crumbData(articleDetaiData.type,articleDetaiData.title)'></breadCrumb>
    <h1 class="title">{{articleDetaiData.title}}</h1>
    <div class="articleTag text-center">
      <span v-if="articleDetaiData.type" class="smallLabel bg1">{{articleDetaiData.type.join()}}</span>
      <span class="smallLabel bg1"> {{articleDetaiData.hot}}℃</span>
    </div>
    <no-ssr>
      <mavon-editor :previewBackground="'#dff0d8'" :toolbarsFlag=false :defaultOpen="'preview'" :subfield=false
        :editable=false v-model="articleDetaiData.content" />
    </no-ssr>
  </div>
</template>

<script>
  import breadCrumb from '../public/breadCrumb.vue'
  export default {
    props: ['articleDetaiData'],
    data() {
      return {
        handbook: "\n**目录 (Table of Contents)**\n\n[TOCM]\n\n[TOC]\n\n# Heading 1\n\n# Heading 1\n## Heading 2               \n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n# Heading 1 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n## Heading 2 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n### Heading 3 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n#### Heading 4 link [Heading link](https://github.com/pandao/editor.md \"Heading link\") Heading link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n##### Heading 5 link [Heading link](https://github.com/pandao/editor.md \"Heading link\")\n###### Heading 6 link [Heading link](https://github.co"
      };
    },
    components: {
      breadCrumb
    },
    methods: {
      crumbData: function (type, tltle) {
        if (type) {
          return [type[0], tltle]
        } else {
          return [tltle]
        }
      }
    }
  }

</script>

<style lang="scss">
  .articleDetails {
    padding: 20px;
    z-index: 0;

    .title {
      color: #3d4450;
      text-align: center;
      font-weight: 400;
      font-size: 32px;
    }

    .articleTag {
      margin: 10px 0;
    }

    .markdown-body {
      color: #468847;
    }
  }
</style>