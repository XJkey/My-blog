<template>
  <div class="articleBar mx-auto mybody3 rounded">
    <div class="dataLabel text-center">
      <span class="month">12月</span>
      <span class="day">28</span>
    </div>
    <div class="articleTitle text-center">
      <div>
        <a href="#" class="animated_h1">详细更新日志详细更新日志详细更新日志详细更新日志详细更新日志详细更新日志详细更新日志</a>
      </div>
    </div>
    <div class="articleTag text-center">
      <span class="smallLabel bg1">javascript,webstrom</span>
      <span class="smallLabel bg1"> 37,548 ℃</span>
    </div>
    <div class="articleContent mx-auto mybody3 rounded">
      <div class="bg-auto img">
        <div class="info">
          sdasfdfdsf
          dsfdsfsdfdsf
          dsfsdfsdfsd
          destroyed() {
          s撒打算打算打撒打算打
          },
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async mounted() {
      let { status, data: { username, power } } = await this.$axios.get('/users/getUser');
      if (status === 200) {

      }
    }
  }
</script>

<style lang="scss">
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

      .img {
        width: 100%;
        height: 100%;
        background: url('https://www.mmgal.com/wp-content/themes/mygalgame/ui/images/cover.jpg');

        .info {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          color: rgba(255, 255, 255, 0.8);
          font-size: 25px;
          padding: 15px 25px;
        }
      }
    }
  }
</style>