<template>
    <div :class="['myPage',style]" style="margin: 20px;">
        <ul>
            <li v-if='activePage!==1'>
                <a>«</a>
            </li>
            <li v-for="index in forPages">
                <a href="" :class="{'active':activePage==index}">{{index}}</a>
            </li>
            <li v-if='maxPage>maxPaging'>
                <a href="javascript:">...</a>
            </li>
            <li v-if='maxPage!=forPages'>
                <a :class="{'active':activePage==maxPage}">{{maxPage}}</a>
            </li>
            <li v-if='activePage!=maxPage&&forPages!=1'>
                <a> »</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //数据总数
                count: 67,
                //每一页显示多少个
                item: 6,
                //需要循环的页数(小于等于maxPaging)
                forPages: 1,
                //最大分页数
                maxPaging: 6,
                //最大页数
                maxPage: 0,
                //当前选中页数
                activePage: 2,

                style: 'one'
            }
        },
        mounted() {
            this.forPages = Math.ceil(this.count / this.item);
            let pages = this.forPages
            this.maxPage = pages;
            if (pages > this.maxPaging) {
                this.forPages = this.maxPaging - 1;
            }

        },
        methods: {
            p: function (index) {
                if (index) {

                }
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