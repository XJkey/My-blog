import mongoose from 'mongoose';
const bcrypt = require('bcryptjs');
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
      const salt = bcrypt.genSaltSync(10);
      const psw = bcrypt.hashSync(val, salt);
      return psw
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
UserSchema.statics.isRegistered = async function ({ email, username }) {
  if (email) {
    let uers = await this.find({ email }, function (err, docs) {
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
    let uers = await this.find({ username }, function (err, docs) {
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
UserSchema.methods.createUser = async function () {
  let nuser = await this.model('User').create({
    username: this.username,
    password: this.password,
    email: this.email
  })
  if (nuser) {
    throw new global.errs.Success('注册成功')
  } else {
    throw new global.errs.ValidationError('注册失败')
  }
};

export default mongoose.model('User', UserSchema)  
