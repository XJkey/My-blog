<!--
 * @Author: your name
 * @Date: 2020-01-14 22:46:28
 * @LastEditTime : 2020-02-13 01:50:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/details/commentBox.vue
 -->
<template>
  <div class="commentBox">
    <messageList @answer='answer' v-if="isHackReset"></messageList>
    <message :isCancel='messageCancel' @cancelMessage='cancelMessage' @hackReset='hackReset' ref=myMsg></message>
  </div>
</template>

<script>
  import message from '../public/message';
  import messageList from '../public/messageList';

  export default {
    data() {
      return {
        messageCancel: false,
        isHackReset: true
      }
    },
    components: {
      message,
      messageList
    },
    methods: {
      answer: function (e) {
        e.srcElement.parentNode.nextElementSibling.appendChild(this.$refs.myMsg.$el);
        this.messageCancel = true
      },
      cancelMessage: function () {
        let commentBox = document.getElementsByClassName('commentBox')[0]
        commentBox.appendChild(this.$refs.myMsg.$el);
        this.messageCancel = false
        this.$store.commit('message/setType', 1);
        this.$store.commit('message/setByCriticsName', null);
        this.$store.commit('message/setByCriticsId', null);
        this.$store.commit('message/setParentId', null);
        this.$store.commit('message/setCommentsId', null);
      },
      hackReset: function () {
        this.isHackReset = false
        this.$nextTick(() => {
          this.isHackReset = true
        })
      }
    }
  }

</script>

<style lang="scss">

</style>