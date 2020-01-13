<!--
 * @Author: your name
 * @Date: 2020-01-12 22:35:50
 * @LastEditTime : 2020-01-12 23:39:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/updateRecord.vue
 -->
<template>
  <div class="updateRecord">
    <container-one :title="'更新记录'">
      <div class="content">
        <ul class="">
          <li>20191123 向日葵：天空鹅卵石 更新汉化补丁v1.5</li>
          <li>20191123 向日葵：天空鹅卵石 更新汉化补丁v1.5</li>
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
  .updateRecord {
    width: 100%;

    .content {
      padding: 15px;
      font-size: 12px;
    }
  }

</style>
