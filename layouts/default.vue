<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-01-11 22:29:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/layouts/default.vue
 -->
<template>
  <div class="default min-h-screen" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578763015316&di=0229ee48adb654d5eb4c86f114bac12b&imgtype=0&src=http%3A%2F%2Fclub-img.kdslife.com%2Fattach%2F1k1%2Fxr%2F4h%2Fowttft-1j9p.jpg');">
    <hearder-nav></hearder-nav>
    <nuxt />
    <x-footer></x-footer>
  </div>
</template>

<script>
import hearderNav from "../components/nav/hearderNav";
import xFooter from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  components: {
    hearderNav,
    xFooter
  },
  mounted(){
    AOS.init();
  }
};
</script>

<style lang="scss">
 .default{
   background: rgb(240,240,240);
   position: relative;
 }
</style>
