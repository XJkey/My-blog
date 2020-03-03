/*
 * @Author: your name
 * @Date: 2020-01-22 12:35:20
 * @LastEditTime : 2020-02-03 02:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/interface/blogs.js
 */
import Router from "koa-router";

import Blogs from "../dbs/models/blogs";

import { Auth } from "../middleware/auth";

let router = new Router({ prefix: "/blogs" });

router.post("/create", new Auth(2).m, async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    let { username, _id } = ctx.session.passport.user;
    let { title, content, contentDOM, type } = ctx.request.body;
    let blog = await Blogs.create({
      username,
      userid: _id,
      content,
      contentDOM,
      title,
      type
    });
    if (blog) {
      throw new global.errs.Success("发布成功");
    } else {
      throw new global.errs.HttpException("发布失败");
    }
  } else {
    throw global.errs.Forbbiden();
  }
});

router.post("/update", new Auth(2).m, async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    let { id: _id, editData } = ctx.request.body;
    let blog = await Blogs.update({ _id }, editData);
    if (blog) {
      throw new global.errs.Success("更新成功");
    } else {
      throw new global.errs.HttpException("更新失败");
    }
  } else {
    throw global.errs.Forbbiden();
  }
});


router.post("/delete", new Auth(2).m, async (ctx, next) => {
  if (ctx.isAuthenticated()) {
    let { id } = ctx.request.body;
    // 执行更新数据
    let blog = await Blogs.findByIdAndUpdate(id, { isDelete: true });
    if (blog) {
      throw new global.errs.Success("删除成功");
    } else {
      throw new global.errs.HttpException("删除失败");
    }
  } else {
    throw global.errs.Forbbiden();
  }
});

router.post("/upHot", new Auth().m, async (ctx, next) => {
  let { id, hot } = ctx.request.body;
  // 执行更新数据
  let blog = await Blogs.findById(id).update({ $inc: { hot: 1 } });
  if (blog) {
    throw new global.errs.Success("更新成功");
  } else {
    throw new global.errs.HttpException("更新失败");
  }
});


router.get("/details", async (ctx, next) => {
  const { title, id } = ctx.request.query;
  let blog;
  if (title) {
    blog = await Blogs.findOne({ isDelete: false, $or: [{ title: { '$regex': title, $options: '$i' } }] })
  } else if (id) {
    blog = await Blogs.findOne({ isDelete: false, _id: id })
  }

  if (blog) {
    ctx.body = { code: 200, msg: "博客获取成功", data: blog };
  } else {
    throw new global.errs.NotFound();
  }
});


router.get("/blogsList", async (ctx, next) => {
  const { pageNum = 1, pageSize = 6, s = "" } = ctx.request.query;
  let options = {
    skip: (pageNum - 1) * pageSize,
    limit: pageSize,
    sort: { createTime: -1 }
  };
  let res = await Blogs.find({
    isDelete: false,
    $or: [
      { title: { '$regex': s, $options: '$i' } },
      { type: { $elemMatch: { $eq: s } } }
    ]
  }, null, options);
  let total = await Blogs.countDocuments({ // 获取数据条数
    isDelete: false,
    $or: [
      { title: { '$regex': s, $options: '$i' } },
      { type: { $elemMatch: { $eq: s } } }
    ]
  });
  if (res) {
    ctx.body = { code: 200, totalCount: total, msg: "列表获取成功", data: res };
  } else {
    throw new global.errs.NotFound();
  }

});

router.get("/getRandomBlogs", async (ctx, next) => {
  let blog = await Blogs.aggregate([{ $match: { isDelete: false } }, { $sample: { size: 8 } }]);
  if (blog) {
    ctx.body = { code: 200, msg: "博客获取成功", data: blog };
  } else {
    throw new global.errs.NotFound();
  }
});

export default router;
