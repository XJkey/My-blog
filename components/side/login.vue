<!--
 * @Author: your name
 * @Date: 2020-01-12 21:28:38
 * @LastEditTime : 2020-01-22 00:48:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/login.vue
 -->
<template>
  <div class="login">
    <container-one :title="user?'<i class=\'fa fa-quote-left\'></i>欢迎！<i class=\'fa fa-quote-right\'></i>':'请登陆'">
      <div v-if="user" class="landing">
        <img src="https://www.mmgal.com/wp-content/uploads/2015/12/2015121908514728.jpg" alt="">
        <span class="username">{{user}}</span>
        <button type="button" class="bg1" @click="exit">退出登陆</button>
      </div>
      <form action="" v-else>
        <div class="account flex">
          <span class="flex-grow-0"><i class="fa fa-user"></i></span>
          <input type="text" name="username" v-model="username" class="outline-none flex-grow">
        </div>
        <div class="password flex">
          <span class="flex-grow-0"><i class="fa fa-lock"></i></span>
          <input type="password" name="password" v-model="password" class="outline-none flex-grow">
        </div>
        <label for="" class="remark">
          <input type="checkbox" />记住我的登陆信息
        </label>
        <div class="btns">
          <button type="button" class="bg1" @click="onSubmit">登陆</button>
          <a class="bg1 float-right" href="./registered">注册</a>
        </div>
      </form>
    </container-one>
  </div>
</template>

<script>
  import containerOne from '../public/containerOne.vue'
  export default {
    props: ['user'],
    data() {
      return {
        username: '',
        password: ''
      }
    },

    components: {
      containerOne
    },
    computed: {

    },
    async mounted() {
      //console.log(this.$store.state.user);
      // const {
      //   status,
      //   data: {
      //     user
      //   }
      // } = await this.$axios.get('/users/getUser');

      // if (status == 200) {
      //   this.user = user
      // }
    },
    methods: {
      onSubmit() {
        this.$axios.post('/users/signin', {
          username: this.username,
          password: this.password,
        }).then(({
          status,
          data
        }) => {
          window.location.href = '/'
        })
      },
      exit() {
        this.$axios.get('/users/exit').then(({
          status,
          data
        }) => {
          window.location.href = '/'
        })
      }
    }
  }

</script>

<style lang="scss">
  .login {
    width: 100%;

    img {
      display: inline;
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }

    .username {
      margin: 0 20px;
      font-size: 14px;
      color: #666;
    }

    .landing {
      padding: 20px;
      text-align: center;
    }

    form {
      padding: 30px 20px;
      border-radius: 0 0 4px 4px;

      .account,
      .password {
        height: 34px;
        margin-bottom: 15px;

        span {
          height: 100%;
          color: #fff;
          background-color: #d9534f;
          border-radius: 4px 0 0 4px;
          padding: 5px 10px;
        }

        input {
          height: 100%;
          background: rgba(0, 0, 0, 0);
          border: 1px solid #f89693;
          border-left: none;
          border-radius: 0 4px 4px 0;
          color: #000;
          font-size: 14px;
          padding: 4px 0 4px 10px;

          &:focus {
            background: #fff;
            border: none;
            box-shadow: black 0 0 50pxs;
          }
        }
      }

      .remark {
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 10px;

        input {
          width: 16px;
          margin-right: 5px;
        }
      }

      .btns {

        button,
        a {
          display: inline-block;
          width: 48%;
          text-align: center;
          font-size: 12px;
          padding: 10px;
          border-radius: 4px;

          &:hover {
            background-color: #d9534f;
          }
        }
      }
    }

  }
</style>