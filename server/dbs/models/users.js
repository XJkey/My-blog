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
UserSchema.statics.findByUid = function (uid, cb) {
  this.find({ "_id": uid }, function (err, docs) {
    cb(err, docs);
  })
}

// 实例方法
UserSchema.methods.print = function () {
  console.log('这是一个实例方法');
  console.log(this);
};

export default mongoose.model('User', UserSchema)  
