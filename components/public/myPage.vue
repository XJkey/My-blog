<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime : 2020-02-13 03:31:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/myPage.vue
 -->
<template>
    <div :class="['myPage',style]" style="margin: 20px;">
        <ul>
            <li v-if='activePage!=1&&count!=0'>
                <a @click="changePage('-1')">«</a>
            </li>
            <li v-for="index in forPages">
                <a @click='changePage(index)' :class="{'active':activePage==index}">{{index}}</a>
            </li>
            <li v-if='maxPage>maxPaging'>
                <a href="javascript:">...</a>
            </li>
            <li v-if='maxPage!=forPages'>
                <a @click='changePage(maxPage)' :class="{'active':activePage==maxPage}">{{maxPage}}</a>
            </li>
            <li v-if='activePage!=maxPage&&forPages!=1&&count!=0'>
                <a @click="changePage('+1')"> »</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['totalCount', 'item'],
        data() {
            return {
                //数据总数
                count: this.totalCount,
                //每一页显示多少个 //6
                //item: 6,
                //需要循环的页数(小于等于maxPaging)
                forPages: 1,
                //最大分页数
                maxPaging: 6,
                //最大页数
                maxPage: 0,
                //当前选中页数
                activePage: 1,
                style: 'one'
            }
        },
        mounted() {
            this.init()
        },
        watch: {
            totalCount(newVal, oldVal) {
                this.init()
            }
        },
        methods: {
            init: function () {
                this.forPages = Math.ceil(this.totalCount / this.item);
                let pages = this.forPages
                this.maxPage = pages;
                if (pages > this.maxPaging) {
                    this.forPages = this.maxPaging - 1;
                }
                let query = this.$route.query;
                let pageNum = query.pageNum ? query.pageNum : 1
                this.activePage = pageNum
            },
            changePage: function (index) {
                let query = this.$route.query;
                let hash = ''
                let pageNum = query.pageNum ? query.pageNum : 1
                if (index === '+1') {
                    pageNum++
                } else if (index === '-1') {
                    pageNum--
                } else {
                    pageNum = index
                }
                query.pageNum = pageNum.toString();
                for (var item in query) {
                    hash += item + '=' + query[item] + '&'
                }
                hash = hash.substring(0, hash.length - 1)

                window.location.href = 'http://' + window.location.host + window.location.pathname + '?' + hash
            }
        }
    }
</script>

<style lang='scss'>
    @mixin page($cl:$color1) {
        li {
            display: inline-block;
            margin-left: 20px;

            a {
                display: inline-block;
                padding: 6px 12px;
                color: $cl;
                border: 2px solid $cl;
                font-size: 12px;
                border-radius: 4px;
                transition: all .5s;

                &.active,
                &:hover {
                    color: #fff;
                    background-color: $cl;
                }
            }
        }
    }

    .myPage.one {
        @include page($color1);
    }

    .myPage.two {
        @include page($color2);
    }
</style>