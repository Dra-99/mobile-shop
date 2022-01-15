const {asyncHandle} = require("../utils/handleResult")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
const User = require("../models/userModel")
dotenv.config();

module.exports = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(payload.id).select("-password");
            next();
        } catch (error) {
            res.status(401);
            next(new Error("未授权，token已失效"))
        }
    }
    if(!token) {
        res.status(401);
        next(new Error("未授权，token不存在"));
    }
}