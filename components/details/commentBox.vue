<template>
    <div>
        <h3 class="comments-title"><i class="fa fa-comments"></i> 92 条评论</h3>
        <div class="loading-comments">
            <i class="fa fa-spinner fa-spin"></i>
        </div>

        <div class="comment-box mybody3">
            <div class="comment-meta">
                <span>头像老乌鸦 <em>说道：</em></span>
                <time class="float-right" datetime="2020-01-11T00:49:36+00:00"> 2020年1月11日 上午12:49 </time>
            </div>
            <div class="comment-body" ref="myCb">
                <p>真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                    真的感谢弟弟君，能玩到这么多好冲的游戏
                </p>
                <a href="#" @click="ss($event)">登录以回复</a>
            </div>
            <message ref=myMsg></message>
        </div>

    </div>
</template>

<script>
    import message from '../public/message';
    export default {
        components: {
            message
        },
        methods: {
            ss: function (e){
                console.log(e.srcElement)
                console.log(this.$refs.myCb)
                console.log(this.$refs.myMsg)
            }
        }
    }
</script>

<style lang="scss">
    .loading-comments {
        font-size: 50px;
        text-align: center;
        color: #d9534f;
    }

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