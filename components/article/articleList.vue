<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-23 22:42:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/article/articleList.vue
 -->
<template>
    <div>
        <template v-for="{item,index} in listData">
            <article-bar :barData='item'></article-bar>
        </template>
        <div v-if='!isData' class="mx-auto mybody3 rounded" style="margin: 15px;padding: 20px;">暂无数据</div>
        <myPage :totalCount='count'></myPage>
    </div>
</template>

<script>
    import articleBar from './articleBar.vue';
    import myPage from '../public/myPage'
    export default {
        components: { articleBar, myPage },
        data() {
            return {
                //数据总数
                count: 0,
                listData: [],
                isData: true
            }
        },
        async mounted() {
            //let { status, data: { username, power } } = await this.$axios.get('/users/getUser');
            let { status, data } = await this.$axios.get('/blogs/blogsList' + window.location.search);
            if (status === 200) {
                this.count = data.totalCount;
                this.listData = data.data;
                if (!this.count) {
                    this.isData = false
                }
            }
        },
    }
</script>