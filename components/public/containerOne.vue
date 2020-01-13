<template>
    <div>
        <div class="bg1 smallTltle">{{title}}</div>
        <div class="mybody3">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'icon']
    }
</script>