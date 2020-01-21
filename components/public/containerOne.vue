<!--
 * @Author: your name
 * @Date: 2020-01-13 22:07:37
 * @LastEditTime : 2020-01-21 14:37:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/public/containerOne.vue
 -->
<template>
    <div>
        <div class="bg1 smallTltle" v-html='title'>{{title}}</div>
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