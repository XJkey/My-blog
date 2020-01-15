<template>
    <div>
        <div class="mainContent">
            <article-details></article-details>
            <myPage></myPage>
            <comment-box></comment-box>
        </div>

    </div>
</template>

<script>
    import articleDetails from '../components/details/articleDetails.vue';
    import commentBox from '../components/details/commentBox.vue'
    import myPage from '../components/public/myPage.vue'
    export default {
        components: {
            articleDetails,
            commentBox,
            myPage
        }
    }
</script>

<style>
  .mainContent{
    display: inline-block;
    width: 780px;
    margin: 20px;
    background-color: $color;
  }
</style>