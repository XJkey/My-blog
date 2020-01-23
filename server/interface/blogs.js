/*
 * @Author: your name
 * @Date: 2020-01-22 12:35:20
 * @LastEditTime : 2020-01-23 16:30:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/interface/blogs.js
 */
import Router from 'koa-router';

import Blogs from '../dbs/models/blogs';

import { Auth } from '../middleware/auth';


let router = new Router({ prefix: '/blogs' });

router.post('/create', new Auth(2).m, async (ctx, next) => {
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
        })
        if (blog) {
            throw new global.errs.Success('发布成功')
        } else {
            throw new global.errs.ValidationError('发布失败')
        }
    } else {
        throw global.errs.Forbbiden();
    }
})

router.post('/upHot', new Auth().m, async (ctx, next) => {

    let { id, hot } = ctx.request.body;

    // 执行更新数据
    let blog = Blogs.findByIdAndUpdate(id, { hot: hot }, function (err, res) {
        if (err) {
            throw new global.errs.ValidationError('更新失败')
        } else {
            throw new global.errs.Success('更新成功')
        }
    });
})


router.get('/blogsList', async (ctx, next) => {
    const { pageNum = 1, pageSize = 10, s = '' } = ctx.request.query;
    await Blogs.countDocuments({ // 获取数据条数
        $or: [
            { title: { '$regex': s, $options: '$i' } },
            { type: { '$regex': s, $options: '$i' } }
        ]
    },async (err, count) => { //查询出结果返回
        await Blogs.find({
            $or: [
                { title: { '$regex': s, $options: '$i' } },
                { type: { '$regex': s, $options: '$i' } }
            ]
        })
            .skip((pageNum - 1) * pageSize)
            .limit(pageSize)
            .sort({ 'updateTime': -1 })
            .exec(async (err, doc) => {
                try {
                    if (!err && doc) {
                        ctx.body = { code: 0, totalCount: count, msg: '列表获取成功', data: doc }
                        return true;
                    }
                    ctx.body = { code: 1, msg: '后端出错' }
                    return false;
                } catch (e) {
                    ctx.body = { code: 1, msg: '后端出错' }
                }
            })
    })
})

export default router;