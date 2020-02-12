/*
 * @Author: your name
 * @Date: 2020-02-11 17:16:44
 * @LastEditTime : 2020-02-11 17:29:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/interface/message.js
 */
import Router from "koa-router";

import Message from "../dbs/models/message";

import { Auth } from "../middleware/auth";

let router = new Router({ prefix: "/message" });

router.post("/add", new Auth(1).m, async (ctx, next) => {
    if (ctx.isAuthenticated()) {
        let { username, _id } = ctx.session.passport.user;
        let { ...content } = ctx.request.body;
        let message = await Message.create({
          username,
          userid: _id,
          ...content
        });
        if (message) {
          throw new global.errs.Success("评论成功");
        } else {
          throw new global.errs.HttpException("评论失败");
        }
      } else {
        throw global.errs.Forbbiden();
      }
})

export default router;
