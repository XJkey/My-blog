<template>
  <div class="articleBar mx-auto mybody3 rounded" data-aos="flip-up">
    <div class="dataLabel text-center">
      <span class="month">{{month}}月</span>
      <span class="day">{{day}}</span>
    </div>
    <div class="articleTitle text-center">
      <div>
        <a :href="'/details?title='+barData.title" @click="uphot(barData._id)" class="animated_h1"
          target="_blank">{{barData.title}}</a>
      </div>
    </div>
    <div class="articleTag text-center" style="position: relative;">
      <span v-if="barData.type" class="smallLabel bg1">{{barData.type.join()}}</span>
      <span class="smallLabel bg1"> {{barData.hot}}℃</span>
      <div style="position: absolute;bottom:13px;right:30px" v-if="power>1">
        <button class="smallLabel bg1"><a :href="'/editArticles?id='+barData._id" target="_blank">编辑</a></button>
        <button class="smallLabel bg1" @click='deleteById(barData._id)'>删除</button>
      </div>
    </div>
    <div class="articleContent mx-auto mybody3 rounded" @click="uphot(barData._id)">
      <a :href="'/details?title='+barData.title" target="_blank">
        <!-- :style="{background: url('/img/articleBarImg/'+imgName+'') no-repeat center;}" -->
        <div class="bg-auto img" :class="'css'+imgName">
          <div class="info" v-html="barData.contentDOM">
            {{barData.contentDOM}}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        month: '',
        day: '',
        isShow: false,
        power: '0',
      }
    },
    props: ['barData', 'imgName'],
    async mounted() {
      let createTime = new Date(this.barData.createTime)
      this.month = createTime.getMonth() + 1;
      this.day = createTime.getDate();
      this.power = this.$store.state.user.user.power;
    },
    updated(){
      if(this.imgName){
        this.addCSS(".css"+this.imgName+"{ background:url(/img/articleBarImg/"+this.imgName+".jpg) no-repeat center}");
      }
    },
    methods: {
      uphot: function (id) {
        this.$axios.post('/blogs/upHot', { id: id });
      },
      deleteById: function (id) {
        //let { status, data } = awaite axios.post('/blogs/delete', { id: id });
        this.$layer.confirm('确定要删除吗？', layerid => {
          this.$layer.close(layerid);
          this.$axios.post('/blogs/delete', { id: id })
            .then(({ status, data }) => {
              this.$layer.msg(data.msg, function () {
                window.location.href = "/";
              });
            })
            .catch(err => {
              let data = err.response.data;
              if (data.msg) {
                this.$layer.msg(data.msg);
              }
            });
        });

      },
      addCSS:function(cssText) {
        var style = document.createElement('style'),  //创建一个style元素
          head = document.head || document.getElementsByTagName('head')[0]; //获取head元素
        style.type = 'text/css'; //这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
        if (style.styleSheet) { //IE
          var func = function () {
            try { //防止IE中stylesheet数量超过限制而发生错误
              style.styleSheet.cssText = cssText;
            } catch (e) {

            }
          }
          //如果当前styleSheet还不能用，则放到异步中则行
          if (style.styleSheet.disabled) {
            setTimeout(func, 10);
          } else {
            func();
          }
        } else { //w3c
          //w3c浏览器中只要创建文本节点插入到style元素中就行了
          var textNode = document.createTextNode(cssText);
          style.appendChild(textNode);
        }
        head.appendChild(style); //把创建的style元素插入到head中    
      }

    },
  }
</script>

<style lang="scss">
  @import url('animate.css');

  .articleBar {
    width: 750px;
    padding-bottom: 40px;
    position: relative;

    .dataLabel {
      background-color: rgb(107, 105, 214);
      position: absolute;
      height: 70px;
      width: 70px;
      left: -25px;
      top: -25px;
      color: white;
      padding-top: 10px;
      border-color: rgb(107, 105, 214);
      border-radius: 100px;
    }

    .month {
      display: block;
      font-size: 10px;
    }

    .day {
      display: block;
      font-size: 20px;
      font-weight: bold;
    }

    .articleTitle {
      padding: 30px 30px 0 30px;

      .animated_h1 {
        color: rgb(255, 255, 255);
        opacity: 0.8;
        background: rgb(30, 199, 230);
        font-size: 28px;
        padding: 2px;
        border-radius: 5px
      }

    }

    .articleTag {
      padding: 20px 0;



    }

    .articleContent {
      width: 710px;
      height: 430px;
      padding: 15px;
      box-sizing: border-box;
      overflow: hidden;

      .img {
        width: 100%;
        height: 100%;
        /* background: url('https://www.mmgal.com/wp-content/themes/mygalgame/ui/images/cover.jpg') no-repeat center; */
        background-size: 100%;
        overflow: hidden;
        transition: all .5s;

        &:hover {
          transition: all .5s;
          background-size: 120%;
          background-position: center;

          .info {
            visibility: visible;
            transition: all .5s;
            transform: scale(1);
            opacity: 1;
          }
        }

        .info {
          opacity: 0;
          transition: .5s;
          width: 100%;
          height: 100%;
          transform: scale(2);
          visibility: hidden;
          background: rgba(0, 0, 0, 0.6);
          color: rgba(255, 255, 255, 0.8);
          font-size: 25px;
          padding: 15px 25px;
        }
      }
    }
  }
</style>