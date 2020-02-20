/*
 * @Author: your name
 * @Date: 2020-02-03 01:26:20
 * @LastEditTime : 2020-02-03 01:41:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/plugins/moment.js
 */
import moment from 'moment';
import Vue from 'vue';
moment.locale('zh-cn'); 
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

Vue.prototype.$moment = moment