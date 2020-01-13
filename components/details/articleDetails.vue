<template>
    <div class="articleDetails mybody3">
        <breadCrumb></breadCrumb>
    </div>
</template>

<script>
    import breadCrumb from '../public/breadCrumb.vue'
    export default {
        components: {
            breadCrumb
        }
    }
</script>

<style lang="scss">
    .articleDetails {
        width: 750px;
        padding: 20px;
        height: 300px;
    }
</style>