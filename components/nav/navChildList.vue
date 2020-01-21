<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-22 01:01:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/nav/navChildList.vue
 -->
<template>
  <div>
    <ul class="navChild">
      <li v-for="(item,key) in list" @mouseleave="active=''" style="position: relative;">
        <a href="#" class="inline-block  text-center px-4 py-1" @mouseover="active=key">{{key}}</a>
        <template v-if="item">
          <child-list v-show="active==key" :list="item" class="childList">
          </child-list>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'childList',
    props: {
      'list': Object
    },
    data() {
      return {
        active: ''
      }
    }
  }

</script>


<style lang="scss">
  .navChild {
    position: absolute;
    top: 100%;
    z-index: 9999;
    color: #000;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 3px 0;
    border-radius: 0 0 2px 2px;

    li {
      padding: 5px 10px;

      &:hover {
        background-color: #d9534f;
        color: #fff
      }
    }

    .childList {
      position: absolute;
      background-color: white;
      left: 100%;
      top: 0;
      border: 1px solid;
      border-color: rgba(221, 221, 221, 0.5);

      ul {
        border-radius: 2px;
      }

    }
  }
</style>