<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime : 2020-01-15 23:34:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/pages/registered.vue
 -->
<template>
  <div class="registered">
    <div class="title">
      <p>My-Blogs</p>
      <em>by XJkey</em>
    </div>
    <div class="welWords">
      在这个站点注册
    </div>
    <div>
      <form action="">
        <div class="formItem">
          <label for="">用户名</label>
          <input class="outline-none" type="text" />
          <div class="warning">
            <span>还剩12s</span>
          </div>
        </div>
        <div class="formItem">
          <label for="">电子邮箱</label>
          <input class="outline-none" type="text" />
          <div class="warning">
            <span>还剩12s</span>
            <a class="sendCode" href="javascript:">发送验证码</a>
          </div>
        </div>
        <div class="formItem">
          <label for="">验证吗</label>
          <input class="outline-none" type="text" />
          <div class="warning">
            <span>还剩12s</span>
          </div>
        </div>
        <div class="formItem">
          <label for="">密码</label>
          <input class="outline-none" type="text" />
          <div class="warning">
            <span>还剩12s</span>
          </div>
        </div>
        <div class="formItem">
          <label for="">确认密码</label>
          <input class="outline-none" type="text" />
          <div class="warning">
            <span>还剩12s</span>
          </div>
        </div>
        <div class="submit">
          <button class="bg1">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blank'
  }

</script>

<style lang="scss">
  .registered {
    width: 320px;
    margin:30px auto;
    font-size: 13px;
    .title {
      background-color: #3d4450;
      text-align: center;
      color: #fff;
      text-shadow: 0 0 .1em, 0 0 .3em;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      height: 50px;
      border-radius:4px;

      em {
        color: #bfc5d4;
        font-style: normal;
        font-size: 12px;
        vertical-align: top;
      }
    }

    .welWords {
      border-left: 4px solid #d9534f;
      padding: 12px;
      margin: 20px 0;
      background-color: #fff;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .1);
    }

    form {
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 3px rgba(0, 0, 0, .1);

      .formItem {
        margin-bottom: 4px;
        label {
          color: #72777c;
          font-size: 14px;
        }

        input {
          height: 36px;
        }

        .warning {
          height: 14px;
          color: #72777c;
          span{
            color: $color1;
          }
          .sendCode{
            float: right;
          }
        }
        
      }
    }

    .submit{
      margin-top: 25px;
          button{
            width: 100%;
          }
        }
  }

</style>
