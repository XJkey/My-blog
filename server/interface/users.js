/*
 * @Author: your name
 * @Date: 2020-01-17 21:23:19
 * @LastEditTime : 2020-01-19 00:53:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/interface/users.js
 */
import Router from 'koa-router';
import Redis from 'koa-redis';
import nodeMailer from 'nodemailer';
import User from '../dbs/models/users';
import Config from '../dbs/config';
import axios from './utils/axios';
import {Auth} from '../middleware/auth'

let router = new Router({
  prefix: '/users'
});

let Store = new Redis({
  port: Config.redis.post, // Redis port
  host: Config.redis.host, // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: Config.redis.password,
  db: 1
}).client

//发送验证码
router.post('/verify', new Auth().m, async (ctx, next) => {
  let username = ctx.request.body.username;
  let email = ctx.request.body.email;
  let user = await User.find({
    email
  });


  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '邮箱已被注册'
    }
    return false;
  }


  const createTime = await Store.hget(`nodemail:${username}`, 'createTime');
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
  if (createTime && new Date().getTime() - createTime - Config.smtp.redispatch() < 0 && new Date().getTime() - createTime - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: `验证请求过于频繁，${Config.smtp.redispatch() / 1000}秒内一次`
    }
    return false
  }


  //发邮件
  let transporter = nodeMailer.createTransport({
    host: Config.smtp.host,
    port: 587,
    secure: false,
    auth: {
      user: Config.smtp.user,
      pass: Config.smtp.pass
    }
  })


  //接收方
  let ko = {
    code: Config.smtp.code(),
    expire: Config.smtp.expire(),
    createTime: Config.smtp.createTime(),
    redispatch: Config.smtp.redispatch(),
    email: ctx.request.body.email,
    user: ctx.request.body.username,
  }

  let mailOption = {
    from: `"认证邮件"<${Config.smtp.user}>`,
    to: ko.email,
    subject: '注册码',
    html: `邀请码：${ko.code}`
  }
  let isSendMail = await new Promise(
    function (resolve, reject) {
      transporter.sendMail(mailOption, (error, info) => {
        if (error) {
          resolve(false)
          return console.log(error)
        } else {
          Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email, 'createTime', ko.createTime);
          //设置数据有效期
          Store.expire(`nodemail:${ko.user}`, ko.expire);
          resolve(true)
        }
      })
    }
  )

  if (isSendMail) {
    ctx.body = {
      code: 0,
      msg: '验证码已发送',
      redispatch: ko.redispatch
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '错误'
    }
  }

})


router.post('/singup', async (ctx) => {
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body;
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code');
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire');
    const createTime = await Store.hget(`nodemail:${username}`, 'createTime');
    if (code === saveCode) {
      if (new Date().getTime() - createTime - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false;
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证吗'
      }
      return false;
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证吗'
    }
    return false;
  }
  let user = await User.find({
    username
  });
  if (user.length) {
    ctx.body = {
      code: -1,
      msg: '已被注册'
    }
    return false;
  }

  let nuser = await User.create({
    username,
    password,
    email
  })

  if (nuser) {
    ctx.body = {
      code: 0,
      msg: '注册成功'
    }
    return true;
  }
})

export default router
