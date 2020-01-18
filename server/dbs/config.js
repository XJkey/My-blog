/*
 * @Author: your name
 * @Date: 2020-01-17 21:18:43
 * @LastEditTime: 2020-01-17 23:41:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/dbs/config.js
 */
export default {
  dbs: 'mongodb://admin:123456@47.244.185.66:27017/myBlog?authSource=admin',
  redis: {
    get host() {
      return '47.244.185.66'
    },
    get post() {
      return 6379
    },
    get password() {
      return "123456"
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return "1193695252@qq.com"
    },
    get pass() {
      return "tkuybvxwfghogebj"
    },
    get code() {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return 60 * 60 * 1000
      }
    },
    get createTime() {
      return () => {
        return new Date().getTime()
      }
    },
    //再发送间隔时常
    get redispatch() {
      return () => {
        return 60 * 1000
      }
    }
  },

}
