const { handleError } = require("../utils/handleResult")
function errorHandle(err, req, res, next) {
    if(err) {
        err = err instanceof Error ? err.message : err;
        res.send(handleError(err));
    }else {
        next()
    }
}

module.exports = errorHandle