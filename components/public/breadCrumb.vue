<!--
 * @Author: your name
 * @Date: 2020-01-13 22:07:37
 * @LastEditTime : 2020-01-31 16:01:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/breadCrumb.vue
 -->
<template>
    <div class="navBar">
        <span><i class="fa fa-home"></i><a href="/">首页</a></span>
        <span v-for="(item, index) in crumbData" :key="index"><i>></i><a>{{item}}</a> </span>
    </div>
</template>

<script>
    export default {
        props: ['crumbData']
    }
</script>

<style lang="scss">
    .navBar {
        padding: 8px 15px;
        margin-bottom: 20px;
        list-style: none;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        font-size: 12px;

        span {
            color: #3d4450;
            line-height: 12px;

            i {
                font-style: normal;
                margin: 0 2px;
            }
        }
    }
</style>