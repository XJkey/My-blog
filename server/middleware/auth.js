/*
 * @Author: your name
 * @Date: 2020-01-18 21:59:58
 * @LastEditTime : 2020-01-19 00:52:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/middleware/auth.js
 */
class Auth {
  constructor(level) {
    this.level = level || 0;
    Auth.USER = 1;
    Auth.ADMIN = 2;
  }

  get m() {
    return async (ctx, next) => {
      let passport = ctx.session.passport;
      if (JSON.stringify(passport) == "{}"||!passport) {
        if ( 0 < this.level) {
            ctx.body='权限不足';
            return false
         // throw new global.errs.Forbbiden('权限不足');
        }
      } else {
        if (passport.power < this.level) {
            ctx.body='权限不足'
            return false
        //  throw new global.errs.Forbbiden('权限不足');
        }
        ctx.auth = {
          uid: passport._id,
          scope: passport.power
        }
      }

      //ctx.body = userToken;ß
      await next();
    }
  }
}

module.exports = {
  Auth
}
