<!--
 * @Author: your name
 * @Date: 2020-01-15 20:33:18
 * @LastEditTime : 2020-01-18 00:57:42
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
      <ValidationObserver v-slot="{ handleSubmit }">
        <form action="" @submit.prevent="handleSubmit()">

          <div class="formItem">
            <label for="">用户名</label>
            <ValidationProvider rules="required|max:6" name='用户名' v-slot="{ errors }">
              <input type="text" v-model="userName" class="outline-none">
              <div class="warning">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="formItem">
            <label for="">电子邮箱</label>
            <ValidationProvider rules="required|email" name='电子邮箱' v-slot="{ errors,validate}">
              <input type="text" v-model="email" class="outline-none email">
              <div class="warning">
                <span>{{ errors[0] }}</span>
                <span v-show="sendCodeTime!=0">{{sendCodeTime}}s后可以重发</span>
                <a class="sendCode" href="javascript:" @click="sendCode(validate)">发送验证码</a>
              </div>
            </ValidationProvider>
          </div>


          <div class="formItem">
            <label for="">验证码</label>
            <ValidationProvider rules="required|length:4" name='验证码' v-slot="{ errors }">
              <input type="text" v-model="code" class="outline-none">
              <div class="warning">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>


          <div class="formItem">
            <label for="">密码</label>
            <ValidationProvider rules="required|alpha_dash|min:6" name='密码' v-slot="{ errors }">
              <input type="password" v-model="password" class="outline-none">
              <div class="warning">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="formItem">
            <label for="">确认密码</label>
            <ValidationProvider rules="required|vpassword" name='确认密码' v-slot="{ errors }">
              <input type="password" v-model="vpassword" class="outline-none">
              <div class="warning">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </div>

          <div class="submit">
            <button class="bg1" @click='onSubmit'>注册</button>
          </div>

        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
  import {
    extend,
    validate
  } from 'vee-validate';


  export default {
    middleware: 'nuxtAuth',
    data() {
      return {
        userName: '',
        email: '',
        code: '',
        password: '',
        vpassword: '',

        sendCodeTime: 0,
        sendCodeBtnDisabled: true,
      }
    },
    layout: 'blank',
    mounted() {
      extend('vpassword', {
        validate: value => {
          if (value == this.password) {
            return true;
          }
          return '两次密码输入不一致';
        }
      });
    },
    methods: {
      sendCode(v) {
        let self = this;
        // 第一种验证方式
        // validate(this.email,"required|email").then((result)=>{
        //   console.log(result)
        // })
        // 第二种验证方式

        v().then((result) => {
          if (result.valid && (this.sendCodeTime <= 0 && this.sendCodeBtnDisabled)) {
            this.sendCodeBtnDisabled = false;
            this.$axios.post('/users/verify', {
              //username: encodeURIComponent(this.userName),
              username: this.userName,
              email: this.email
            }).then(({
              status,
              data
            }) => {
              if (data.code == 200) {
                this.sendCodeTime = data.redispatch / 1000
                let timerid = setInterval(() => {
                  --this.sendCodeTime;
                  if (this.sendCodeTime <= 0) {
                    this.sendCodeBtnDisabled = true;
                    clearInterval(timerid);
                  }
                }, 1000)

              } else {
                this.sendCodeBtnDisabled = true;
              }
            }).catch(err => {
              this.sendCodeBtnDisabled = true;
            })
          }
        })





      },
      onSubmit() {
        this.$axios.post('/users/singup', {
          username: this.userName,
          email: this.email,
          username: this.userName,
          password: this.password,
          vpassword:this.vpassword,
          email: this.email,
          code: this.code
        }).then(({
          status,
          data
        }) => {
          if (data && data.code == 200) {
            window.location.href = '/'
          }
        }
        )
      }
    }
  }

</script>

<style lang="scss">
  .registered {
    width: 320px;
    margin: 30px auto;
    font-size: 13px;

    .title {
      background-color: #3d4450;
      text-align: center;
      color: #fff;
      text-shadow: 0 0 .1em, 0 0 .3em;
      font-size: 20px;
      font-family: "Microsoft YaHei";
      height: 50px;
      border-radius: 4px;

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

          span {
            color: $color1;
          }

          .sendCode {
            float: right;
          }
        }

      }
    }

    .submit {
      margin-top: 25px;

      button {
        width: 100%;
      }
    }
  }
</style>