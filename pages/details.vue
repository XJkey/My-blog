<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime : 2020-01-31 17:28:15
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/details.vue
 -->
<template>
    <div>
        <div class="mainContent">
            <article-details :articleDetaiData='articleDetaiData'></article-details>
            <!-- <myPage></myPage> -->
            <comment-box></comment-box>
        </div>
    </div>
</template>

<script>
    import articleDetails from '../components/details/articleDetails.vue';
    import commentBox from '../components/details/commentBox.vue'
    import myPage from '../components/public/myPage.vue'
    export default {
        components: {
            articleDetails,
            commentBox,
            myPage
        },
        async asyncData(ctx) {
            let obj = {}
            let { status, data } = await ctx.$axios.get('/blogs/details?' + ctx.route.fullPath.split('?')[1]);
            if (status === 200) {
                obj.articleDetaiData = data.data
            } else {
                obj.articleDetaiData = {}
            }
            return obj
        }
    }
</script>

<style>
    .mainContent {
        display: inline-block;
        width: 780px;
        margin: 20px;
        background-color: $color;
    }
</style>