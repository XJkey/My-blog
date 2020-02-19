<!--
 * @Author: your name
 * @Date: 2020-01-14 22:46:28
 * @LastEditTime : 2020-02-13 01:32:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/message.vue
 -->
<template>
    <div class='message-box'>
        <h3 class="comments-title"><i class="fa fa-pencil"></i>欢迎留言
            <button style="padding: 5px;background-color: #d9534f;color: #fff;" @click='cancelMessage'
                v-show="isCancel">取消留言</button>
        </h3>

        <div class="">
            <textarea class='outline-none' placeholder="赶快发表你的见解吧！" v-model='content' name="content" id="" cols="30"
                rows="10"></textarea>
        </div>

        <button class="submitMessage" @click="addMessage">发表评论</button>
    </div>
</template>

<script>
    export default {
        props: ['isCancel'],
        data() {
            return {
                content: ''
            }
        },
        methods: {
            cancelMessage: function () {
                this.$emit('cancelMessage')
            },
            addMessage: async function () {
                if (!this.content) {
                    this.$layer.msg('请输入内容');
                    return
                }
                const { status, data } = await this.$axios.post('/message/add', { content: this.content, ...this.$store.state.message });
                this.content = '';
                this.$emit('hackReset')
            }
        },
    }
</script>

<style lang="scss">
    .message-box {
        textarea {
            background-color: rgba(0, 0, 0, 0);
            width: 100%;
            border: 2px solid;
            border-radius: 4px;
            border-color: rgb(193, 193, 193);
            padding: 10px;
            font-size: 14px;
            transition: all 0.5s;

            &:focus {
                background-color: #fff;
                border: 2px solid #f89693;
                transition: all 0.5s;
            }
        }

        .submitMessage {
            margin-top: 20px;
            width: 100%;
            color: rgb(217, 83, 79);
            border: 2px solid rgb(217, 83, 79);

            &:hover {
                color: #fff;
            }
        }
    }
</style>