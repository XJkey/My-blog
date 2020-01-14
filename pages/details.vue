<template>
    <div>
        <div class="mainContent">
            <article-details></article-details>
            <comment-box></comment-box>
        </div>

    </div>
</template>

<script>
    import articleDetails from '../components/details/articleDetails.vue';
    import commentBox from '../components/details/commentBox.vue'
    export default {
        components: {
            articleDetails,
            commentBox
        }
    }
</script>

<style>
  .mainContent{
    display: inline-block;
    width: 780px;
    margin: 20px;
  }
</style>