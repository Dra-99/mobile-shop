exports.handleError = (msg = "server inner error", code = 500) => {
    return {
        code,
        msg
    }
}

exports.handleResult = (result) => {
    return {
        code: 0,
        msg: "请求成功",
        datas: result
    }
}

exports.asyncHandle = (fun) => {
    return async (req, res, next) => {
        try {
            const result = await fun(req, res, next);
            res.send(this.handleResult(result))
        } catch (error) {
            next(error);
        }
    }
}  