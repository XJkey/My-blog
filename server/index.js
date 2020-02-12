/*
 * @Author: your name
 * @Date: 2020-01-17 21:18:43
 * @LastEditTime : 2020-02-11 17:19:49
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/index.js
 */
//const Koa = require('koa');
import Koa from 'koa';
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt');

import dbConfig from './dbs/config';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import Redis from 'koa-redis';
import passport from './interface/utils/passport';


import errors from './core/http-exception';
import catchError from './middleware/exception';

import users from './interface/users';
import blogs from './interface/blogs';
import message from './interface/message';


const app = new Koa();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

global.errs = errors;
global.dev = config.dev;

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  //链接mongdb
  mongoose.connect(dbConfig.dbs, {
    //如果要以url方式链接，需要加上这个参数
    useNewUrlParser: true
  })

  app.use(catchError);

  app.use(bodyParser({
    extendTypes: ["json", 'form', 'text']
  }));

  //当 app.proxy 设置为 true 时，支持 X-Forwarded-Host
  app.proxy = true;

  //设置session
  app.keys = ['blog', 'keykey']
  app.use(session({
    key: 'blog',
    prefix: 'blog:uid',
    rolling: true,
    //ttl:10 * 1000,
    store: new Redis({
      port: dbConfig.redis.post, // Redis port
      host: dbConfig.redis.host, // Redis host
      family: 4, // 4 (IPv4) or 6 (IPv6)
      password: dbConfig.redis.password,
      db: 1
    }),
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    errorHandler(err, type, ctx) {
    }
  }))



  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(passport.initialize());
  app.use(passport.session());

  //路由在此处引用
  app.use(users.routes()).use(users.allowedMethods());
  app.use(blogs.routes()).use(blogs.allowedMethods());
  app.use(message.routes()).use(message.allowedMethods());

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
