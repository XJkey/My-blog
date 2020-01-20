class HttpException extends Error {
    constructor(msg = "服务器异常", errorCode = 10000, code = 400) {
        super();
        this.errorCode = errorCode;
        this.code = code;
        this.msg = msg;
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 10000;
        this.code = 400;
        this.msg = msg || "参数错误";
    }
}

class Success extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 0;
        this.code = 201;
        this.msg = msg || "ok";
    }
}

class NotFound extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 10000;
        this.code = 404;
        this.msg = msg || "资源未找到";
    }
}

class AuthFailed extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 10004;
        this.code = 401;
        this.msg = msg || "授权失败";
    }
}

class Forbbiden extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 10006;
        this.code = 403;
        this.msg = msg || "禁止访问";
    }
}

class ValidationError extends HttpException {
    constructor(msg, errorCode) {
        super();
        this.errorCode = errorCode || 10005;
        this.code = 405;
        this.msg = msg || "验证失败";
    }
}



export default {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbbiden,
    ValidationError
}

export {
    HttpException,
    ParameterException,
    Success,
    NotFound,
    AuthFailed,
    Forbbiden,
    ValidationError
}