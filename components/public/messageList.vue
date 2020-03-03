<!--
 * @Author: your name
 * @Date: 2020-02-11 17:37:39
 * @LastEditTime : 2020-02-13 02:19:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/messagelist.vue
 -->
<template>
    <div>
        <h3 class="comments-title"><i class="fa fa-comments"></i> {{msgListData.allTotal||0}}
            条{{$store.state.message.articleId?"评论":"留言"}}</h3>
        <div class="loading-comments" v-if='!msgListData.code'>
            <i class="fa fa-spinner fa-spin"></i>
        </div>
        <div v-for="(item,index) in msgListData.data" style="margin:20px 0 ;" class="comment-box mybody3">
            <div class="comment-meta">
                <span>{{item.username}} <em>说道：</em></span>
                <time class="float-right">{{item.createTime | dateformat}}</time>
            </div>
            <div class="comment-body">
                <p>{{item.content}}
                </p>
                <a @click="answer($event,2,item.username,item.userid,item._id)" v-if="isAnswer">回复</a>
                <a href="/" v-else>登录以回复</a>
            </div>
            <div class="msgSlot">
            </div>
            <!-- <massageList style="margin:20px;"></massageList> -->
            <template v-for="(childItem,childIndex) in item.child">
                <div class="comment-box mybody3" style="margin:10px;">
                    <div class="comment-meta">
                        <span>{{childItem.username}} <em>说道：</em></span>
                        <time class="float-right"> {{childItem.createTime | dateformat}} </time>
                    </div>
                    <div class="comment-body">
                        <p>{{childItem.content}}
                            <i v-if='childItem.parentComments'>
                                <i style="color: #3a87ad;">//@{{childItem.parentComments[0].username}}：</i>
                                {{childItem.parentComments[0].content}}</i>
                        </p>
                        <a @click="answer($event,3,childItem.username,childItem.userid,item._id,childItem._id)"
                            v-if="isAnswer">回复</a>
                        <a href="/" v-else>登录以回复</a>
                    </div>
                    <div class="msgSlot">
                    </div>
                    <!-- <massageList style="margin:20px;"></massageList> -->
                </div>
            </template>
        </div>
        <myPage v-if='!!msgListData.data.length' :item='6' :totalCount='msgListData.totalCount'></myPage>
    </div>
</template>

<script>
    import myPage from '../public/myPage'
    export default {
        name: 'massageList',
        components: { myPage },
        data() {
            return {
                isAnswer: false,
                msgListData: { data: [] }
            }
        },
        async mounted() {
            let query = this.$route.query;
            let pageNum = query.pageNum ? query.pageNum : 1
            this.isAnswer = this.$store.state.user.user.username?true:false
            let { status: status1, data } = await this.$axios.get('/message/list', { params: { articleId: this.$store.state.message.articleId, pageNum } });
            if (status1 === 200) {
                this.msgListData = data
            }
        },
        methods: {
            answer: function (e, n, name, id, _id, commentsId) {
                this.$emit('answer', e)
                this.$store.commit('message/setType', n);
                this.$store.commit('message/setByCriticsName', name);
                this.$store.commit('message/setByCriticsId', id);
                this.$store.commit('message/setParentId', _id);
                this.$store.commit('message/setCommentsId', commentsId);
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

        i {
            font-style: normal;
        }

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
                word-wrap: break-word;
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