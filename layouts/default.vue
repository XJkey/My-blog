<template>
  <div class="default min-h-screen">
    <hearder-nav></hearder-nav>
    <nuxt />
    <x-footer></x-footer>
  </div>
</template>

<script>
import hearderNav from "../components/nav/hearderNav";
import xFooter from "../components/footer";
export default {
  components: {
    hearderNav,
    xFooter
  }
};
</script>

<style lang="scss">
 .default{
   background: rgb(240,240,240);
   position: relative;
 }
</style>
