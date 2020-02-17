<!--
 * @Author: your name
 * @Date: 2020-02-11 17:37:39
 * @LastEditTime : 2020-02-13 02:19:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/messagelist.vue
 -->
<template>
    <div class="comment-box mybody3">
        <div class="comment-meta">
            <span>头像老乌鸦 <em>说道：</em></span>
            <time class="float-right" datetime="2020-01-11T00:49:36+00:00"> 2020年1月11日 上午12:49 </time>
        </div>
        <div class="comment-body">
            <p>真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
                真的感谢弟弟君，能玩到这么多好冲的游戏
            </p>
            <a @click="answer($event)" v-if="isAnswer">回复</a>
            <a href="/" v-else>登录以回复</a>
        </div>
        <div class="msgSlot">
        </div>
        <!-- <massageList style="margin:20px;"></massageList> -->
    </div>
</template>

<script>
    export default {
        name: 'massageList',
        data() {
            return {
                isAnswer: false
            }
        },
        async mounted() {
            let { status, data: { username, power } } = await this.$axios.get('/users/getUser');
            if (status === 200) {
                console.log(username)
                if (username) {
                    this.isAnswer = true
                }
            }
        },
        methods: {
            answer: function (e) {
                this.$emit('answer', e)
            }
        }
    }
</script>

<style lang="scss">
    .comment-box {
        border-radius: 4px;
        padding: 2px;
        font-size: 12px;
        transition: all .5s;

        &:hover {
            color: #000;
            background-color: #fff;
            transition: all .5s;
        }

        .comment-meta {
            position: relative;
            height: auto;
            min-height: 37px;
            line-height: 37px;
            padding-left: 45px;
            background: rgba(217, 237, 247, 0.6);
            color: rgb(61, 68, 80);
            font-weight: 700;


            span {
                em {
                    font-style: normal;
                    font-weight: normal;
                    margin-left: 10px;
                }
            }

            time {
                margin-right: 20px;
            }
        }

        .comment-body {
            position: relative;
            padding: 20px 55px 30px 45px;
            line-height: 20px;

            p {
                margin: 0 0 10px;
            }

            a {
                position: absolute;
                bottom: 3px;
                right: 12px;
                font-size: 12px;
            }
        }

    }
</style>