<!--
 * @Author: your name
 * @Date: 2020-01-11 21:22:16
 * @LastEditTime : 2020-02-10 18:00:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/layouts/default.vue
 -->
<template>
  <div>
    <div class="bg-fixed" id='bgImg'>
      <li v-for="(item,key) in result" style="width: 100%;height: 100%; position: absolute; opacity: 0;"
        :class="{'animation0':!key}">
        <img :src="'/img/'+item+'.jpg'" alt="" style=" object-fit: cover; width: 100%;height: 100%; ">
      </li>
      <li style="width: 100%;height: 100%; position: absolute; opacity: 0.5;z-index: -1;" id="basementBg">
        <img :src="'/img/'+basementBg+'.jpg'" alt="" style=" object-fit: cover; width: 100%;height: 100%; ">
      </li>
    </div>
    <div id='shade' style="overflow: hidden;position: fixed;z-index: 1000;top: 0; left: 0;bottom: 0;right: 0;">
      <div id="green_monster" data-big="/img/rclick.jpg">
      </div>
    </div>
    <hearder-nav></hearder-nav>
    <div style="width: 1300px; margin: 0 auto; ">
      <nuxt />
    </div>
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
    data: function () {
      return {
        backgroundImageAarry: ['3E714584', '3FAC9268', '3FE1CDA1', '4DCED4E2', '9E1AA9CA', '9D840F43'],
        result: [],
        basementBg: '',
      }
    },
    mounted() {
      AOS.init();
      $(document).ready(function () {
        $(document).bind("contextmenu", function (e) {
          return false;
        });
        $('body').on('mousedown', function (e) {
          if (3 == e.which) {
            $("#shade").show()
          } else if (1 == e.which) {
            $("#shade").hide()
          }
        })

        $("#green_monster").mlens(
          {
            imgSrc: $("#green_monster").attr("data-big"),   // path of the hi-res version of the image
            lensShape: "circle",                // shape of the lens (circle or square)
            lensSize: 180,                  // size of the lens (in px)
            borderSize: 4,                  // size of the lens border (in px)
            borderColor: "#fff",                // color of the lens border (#hex)
            borderRadius: 0                 // border radius (optional, only if the shape is square)
          }
        );

        $("#shade").hide()
      });

      let arr = this.backgroundImageAarry;

      this.result = [];

      let ranNum = 4;

      for (let i = 0; i < ranNum; i++) {
        let ran = Math.floor(Math.random() * (arr.length - i));
        this.result.push(arr[ran]);
        arr[ran] = arr[arr.length - i - 1];
      };

      this.basementBg = this.result.shift();

      ranNum--

      let i = 1;
      let changBg = function () {
        $("#bgImg").find("li").eq(i).addClass('animation0')
        i++;
        if (i >= ranNum) {
          i = 0
        }
        $("#bgImg").find("li").eq(i).removeClass('animation0')
      }
      let timer = setInterval(changBg, 5300)

      document.onvisibilitychange = function () {
        if (document.visibilityState == "visible") {
          timer = setInterval(changBg, 5300)
        } else {
          clearInterval(timer);
        }
      }
    }
  };
</script>

<style lang="scss">
  @-webkit-keyframes rabbit {
    0% {
      opacity: 0;
      transform: scale(1)
    }

    50% {
      opacity: 1;
      transform: scale(1.1)
    }

    100% {
      opacity: 0;
      transform: scale(1.1)
    }

  }

  .animation0 {
    animation: rabbit 10000ms 1;
    z-index: 100;
  }

  #green_monster {
    height: 100vh;
    width: 100vw;

  }

  .opacity0 {
    opacity: 0
  }

  #bgImg {
    overflow: hidden;
    position: fixed;
    z-index: -2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .default {
    background: rgb(240, 240, 240);
    position: relative;
  }
</style>