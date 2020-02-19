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

router.get("/list", async (ctx, next) => {
  const { pageNum = 1, pageSize = 10, articleId = null } = ctx.request.query;
  let options = {
    skip: (pageNum - 1) * pageSize,
    limit: pageSize,
    sort: { createTime: -1 }
  };
  // Imooc.findById(_id,function(err,lesson){
  //   if(err){console.log(err);}
  //   var lessonId = 'course'+lesson.id;
  //   data.lessonName = lesson.name;
  //   data.chapters = []
  //   // 将章节数据写入到需要返回的给请求的data中
  //   Imooc.find({parent:lessonId},function(err,docs){
  //     for(var i = 0; i < docs.length; i++){
  //       var chapterName = docs[i].name
  //       data.chapters[i] = {};
  //       data.chapters[i].sections = [];
  //       data.chapters[i].name = chapterName;

  //       Imooc.find({parent:chapterName},function(err,docss){
  //         if(err){console.log(err);}
  //         // console.log(data.chapters[i].sections)
  //         for(var j = 0; j < docss.length; j++){
  //           var name = docss[j].name
  //           var url = docss[j].url
  //           var section = {name:name,url:url}
  //           //在我自己做的时候这个地方sections报错：undefined。
  //           data.chapters[i].sections.push(section)
  //         }
  //       })
  //     }
  //   })})
  let res = await Message.find({
    articleId,
    type: articleId ? 1 : 0
  }, null, options)
  let total = await Message.countDocuments({ // 获取数据条数
    articleId,
    type: articleId ? 1 : 0
  });
  if (res) {
    for (let i = 0; i < res.length; i++) {
      res[i]._doc.child = []
      let docss = await Message.find({ parentId: res[i]._id })
      for (let j = 0; j < docss.length; j++) {
        if (docss[j].type === 3) {
          let data = await Message.find({ parentId: docss[j]._id })
          docss[i]._doc.parentComments = data
        }
        res[i]._doc.child = docss
      }
      ctx.body = { code: 200, totalCount: total, msg: "列表获取成功", data: res };
    }
  } else {
    throw new global.errs.NotFound();
  }

});


export default router;
