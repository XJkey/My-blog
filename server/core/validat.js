/*
 * @Author: your name
 * @Date: 2020-01-20 18:01:02
 * @LastEditTime : 2020-01-21 11:30:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/server/core/validat.js
 */
import datalize from 'datalize';
const field = datalize.field;
datalize.set('autoValidate', true);


export let singupValidate = datalize([
    field('username', '用户名').required().length(1, 20),
    field('password', '密码').required().minLength(6),
    field('vpassword', '确认密码').required().custom(async function (value, result, ctx) {
        let password = await result.password;
        if (value != password.value) {
            throw new Error('两次密码不一致');
        }
    }),
    field('email', '邮箱').required().email(),
    field('code', '验证码').required().length(4,4),
])