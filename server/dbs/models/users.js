/*
 * @Author: your name
 * @Date: 2020-01-20 18:01:02
 * @LastEditTime : 2020-01-20 20:34:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/dbs/models/users.js
 */
import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');
const crypto = require("crypto");

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true,
    set(val) {
      const md5 = crypto.createHash("md5");
      let md5Sum = md5.update(val); // update 加密
      let result = md5Sum.digest('hex');
      return result
    }
  },
  email: {
    type: String,
    require: true
  },
  power: {
    type: Number,
    default: 0
  }
})

// 静态方法
UserSchema.statics.isRegistered = async function ({
  email,
  username
}) {
  if (email) {
    let uers = await this.find({
      email
    }, function (err, docs) {
      if (err) {
        throw err;
      } else {
        return docs
      }
    })

    if (uers.length) {
      throw new global.errs.HttpException('邮箱已被注册')
    }
  }
  if (username) {
    let uers = await this.find({
      username
    }, function (err, docs) {
      if (err) {
        throw err;
      } else {
        return docs
      }
    })

    if (uers.length) {
      throw new global.errs.HttpException('用户名已被注册')
    }
  }


}

// 实例方法
UserSchema.statics.createUser = async function ({username,password,email}) {
  let nuser = await this.create({
    username,
    password,
    email
  })
  if (nuser) {
    throw new global.errs.Success('注册成功')
  } else {
    throw new global.errs.ValidationError('注册失败')
  }
};

export default mongoose.model('User', UserSchema)
