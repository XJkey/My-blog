/*
 * @Author: your name
 * @Date: 2020-01-19 17:48:26
 * @LastEditTime : 2020-01-21 11:14:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/middleware/nuxtAuth.js
 */
export default async ({ route, req, error }) => {
    let level = 0;
    let path = route.path;
    switch (path) {
        case '/':
            break
    }
    let ctx = req.ctx;
    let passport = ctx.session.passport;
    if (passport && JSON.stringify(passport) != "{}") {
        if (passport.power < level) {
            error('权限不足')
        }
    }
}