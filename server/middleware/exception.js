/*
 * @Author: your name
 * @Date: 2020-01-18 21:59:58
 * @LastEditTime : 2020-01-21 11:19:54
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /My-blog/middleware/exception.js
 */
import { HttpException } from '../core/http-exception.js';
const datalize = require('datalize');
const catchError = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        const isHttpException = error instanceof HttpException;
        const isDev = global.dev;
        const isDatalizeError = error instanceof datalize.Error
        if (isDev && !isHttpException && !isDatalizeError) {
            throw error;
        }

        if (isDatalizeError) {
            ctx.status = 405;
            ctx.body = Object.assign({
                errorCode: '10005',
                msg: JSON.stringify(error.errors),
                request: `${ctx.method} ${ctx.path}`
            }, error.toJSON());
        } else if (isHttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.code;
        } else {
            ctx.body = {
                msg: 'we made a mistake',
                error_code: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500;
        }
    }
}

module.exports = catchError;