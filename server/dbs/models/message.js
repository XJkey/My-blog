/*
 * @Author: your name
 * @Date: 2020-01-20 18:01:02
 * @LastEditTime : 2020-02-11 15:15:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/dbs/models/blogs.js
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    parentId: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    byCriticsName: {
        type: String,
        required: false
    },
    byCriticsId: {
        type: String,
        required: false
    },
    articleTitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        //0，留言 1，留言下的评论 2，追加评论
        default: 0
    },
    isView: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: 'createTime' }
})


export default mongoose.model('Message', MessageSchema)
