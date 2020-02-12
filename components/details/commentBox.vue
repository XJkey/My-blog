<!--
 * @Author: your name
 * @Date: 2020-01-14 22:46:28
 * @LastEditTime : 2020-02-13 01:50:10
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/details/commentBox.vue
 -->
<template>
  <div class="commentBox">
    <h3 class="comments-title"><i class="fa fa-comments"></i> 92 条评论</h3>
    <div class="loading-comments">
      <i class="fa fa-spinner fa-spin"></i>
    </div>
    <messageList @answer='answer'></messageList>
    <message :isCancel='messageCancel' @cancelMessage='cancelMessage' ref=myMsg></message>
  </div>
</template>

<script>
  import message from '../public/message';
  import messageList from '../public/messageList';

  export default {
    data() {
      return {
        messageCancel:false
      }
    },
    components: {
      message,
      messageList
    },
    methods: {
      answer: function (e) {
        e.srcElement.parentNode.nextElementSibling.appendChild(this.$refs.myMsg.$el);
        this.messageCancel=true
      },
      cancelMessage:function(){
        let commentBox=document.getElementsByClassName('commentBox')[0]
        commentBox.appendChild(this.$refs.myMsg.$el);
        this.messageCancel=false
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
</style>