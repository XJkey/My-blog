<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime: 2020-03-04 19:55:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/article/articleList.vue
 -->
<template>
    <div>
        <template v-for="(item,index) in articleListData.data">
            <article-bar :barData='item' :imgName="result[index]" style="margin-top: 40px;"></article-bar>
        </template>
        <div v-if='!articleListData.data.length' class="mx-auto mybody3 rounded" style="margin: 15px;padding: 20px;">
            暂无数据</div>
        <myPage v-if='!!articleListData.data.length' :item='6' :totalCount='articleListData.totalCount'></myPage>
    </div>
</template>

<script>
    import articleBar from './articleBar.vue';
    import myPage from '../public/myPage';
    import { articleBarImgFileName } from '../../config/pictureFileName.js'
    export default {
        props: ['articleListData'],
        data() {
            return {
                result: [],
                basementBg: ''
            }
        },
        components: { articleBar, myPage },
        mounted() {
            let arr = articleBarImgFileName;

            this.result = [];

            let ranNum = 6;

            for (let i = 0; i < ranNum; i++) {
                let ran = Math.floor(Math.random() * (arr.length - i));
                this.result.push(arr[ran]);
                arr[ran] = arr[arr.length - i - 1];
            };
        },
    }
</script>