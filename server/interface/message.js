/*
 * @Author: your name
 * @Date: 2020-02-11 17:16:44
 * @LastEditTime : 2020-02-11 17:29:18
 * @LastEditors: Please set LastEditors
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

router.get("/list", async (ctx, next) => {
  const { articleId = null, pageNum = 1, pageSize = articleId ? 6 : 12 } = ctx.request.query;
  let options = {
    skip: (pageNum - 1) * pageSize,
    limit: pageSize,
    sort: { createTime: -1 }
  };
  let res = await Message.find({
    articleId,
    type: articleId ? 1 : 0
  }, null, options)
  let total = await Message.countDocuments({ // 获取数据条数
    articleId,
    type: articleId ? 1 : 0
  });
  let allTotal = await Message.countDocuments({ // 获取数据总条数
    articleId
  });
  if (res) {
    for (let i = 0; i < res.length; i++) {
      res[i]._doc.child = []
      let docss = await Message.find({ parentId: res[i]._id })
      for (let j = 0; j < docss.length; j++) {
        if (docss[j].type === 3) {
          let data = await Message.find({ _id: docss[j].commentsId })
          docss[j]._doc.parentComments = data
        }
        res[i]._doc.child = docss
      }
    }
    ctx.body = { code: 200, totalCount: total, allTotal, msg: "列表获取成功", data: res };
  } else {
    throw new global.errs.NotFound();
  }

});

router.get("/newestList", async (ctx, next) => {
  let message = await Message.find().sort({ createTime: -1 }).limit(5)
  if (message) {
    ctx.body = { code: 200, msg: "列表获取成功", data: message };
  } else {
    throw new global.errs.NotFound();
  }

})
export default router;
