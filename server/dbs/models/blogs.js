/*
 * @Author: your name
 * @Date: 2020-01-20 18:01:02
 * @LastEditTime : 2020-02-03 02:13:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/dbs/models/blogs.js
 */
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    contentDOM: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    type: {
        type: Array
    },
    hot: {
        type: Number,
        default:0
    },
    isDelete: {
        type: Boolean,
        default:false
    }
}, {
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
})


export default mongoose.model('Blog', BlogSchema)
