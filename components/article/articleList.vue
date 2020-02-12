<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-02-10 19:01:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/article/articleList.vue
 -->
<template>
    <div>
        <template v-for="(item,index) in articleListData.data">
            <article-bar :barData='item'></article-bar>
        </template>
        <div v-if='!articleListData.data.length' class="mx-auto mybody3 rounded" style="margin: 15px;padding: 20px;">暂无数据</div>
        <myPage v-if='!!articleListData.data.length' :totalCount='articleListData.totalCount'></myPage>
    </div>
</template>

<script>
    import articleBar from './articleBar.vue';
    import myPage from '../public/myPage'
    export default {
        props:['articleListData'],
        components: { articleBar, myPage },
        // data() {
        //     return {
        //         //数据总数
        //         count: 0,
        //         listData: [],
        //         isData: true
        //     }
        // },
        // async mounted() {         
        //     let { status, data } = await this.$axios.get('/blogs/blogsList' + window.location.search);
        //     if (status === 200) {
        //         this.count = data.totalCount;
        //         this.listData = data.data;
        //         if (!this.count) {
        //             this.isData = false
        //         }
        //     }
        // }
    }
</script>