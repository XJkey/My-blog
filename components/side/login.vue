<!--
 * @Author: your name
 * @Date: 2020-01-12 21:28:38
 * @LastEditTime : 2020-01-12 23:42:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/components/side/login.vue
 -->
<template>
  <div class="login">
    <div class="bg1 smallTltle">请登陆</div>
    <form action="" class="mybody3">
      <div class="account flex">
        <span class="flex-grow-0">qw</span>
        <input type="text" class="outline-none flex-grow">
      </div>
      <div class="password flex">
        <span class="flex-grow-0">qw</span>
        <input type="text" class="outline-none flex-grow">
      </div>
      <label for="" class="remark">
        <input type="checkbox" />记住我的登陆信息
      </label>
      <div class="btns">
        <button type="submit" class="bg1">登陆</button>
        <a class="bg1 float-right" href="#">注册</a>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  .login {
    width: 100%;

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
