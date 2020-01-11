<template>
    <div>
        <ul class="navChild">
            <li v-for="(item,key) in list" @mouseleave="active=''" style="position: relative;">
                <a href="#" class="inline-block  text-center px-4 py-1"  @mouseover="active=key">{{key}}</a>
                <template v-if="item">
                    <child-list   v-show="active==key" :list="item"  class="childList" >            
                    </child-list> 
                </template>    
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'childList',
        props: {
            'list': Object
        },
        data() {
            return {
                active:''
            }
        }
    }
</script>


<style lang="scss">
    .navChild {
        position: absolute;
        top: 100%;
        z-index: 100;
        color: #000;
        background-color: white;
        .childList{
            position: absolute;
            background-color: white;
            left: 100%;
            top: 0;
        }
    }
</style>