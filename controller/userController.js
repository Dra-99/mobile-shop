const User = require("../models/userModel")
const {asyncHandle} = require("../utils/handleResult")
const bcrypt = require("bcryptjs")
const createJWT = require("../utils/createJWT")

/**
 * @desc asyncHandle方法是我已经封装好的，不许要直接向客户端发送数据，只需将要发送的数据返回即可
 */

/**
 * @desc 用户注册
 * @router POST /api/user
 * @access 公开
 */
const userRegister = asyncHandle(async (req, res) => {
    const {name, email, password} = req.body;
    const isHaveUser = await User.findOne({ email })

    // 用户已存在
    if(isHaveUser) {
        res.status(400);
        throw new Error("用户已注册");
    }
    // 注册用户
    // 用户密码加密
    const passwordToBcrypt = await bcrypt.hash(password, 10);
    const user = await User.create({name, email, password: passwordToBcrypt});
    if(user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: createJWT(user._id)
        }
    }else {
        res.status(400);
        throw new Error("用户信息无效");
    }
})

/**
 * @desc 用户登录
 * @router POST/api/user/login
 * @access 公开
 */
const userLogin = asyncHandle(async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    // 判断密码是否一致
    if(user && bcrypt.compareSync(password, user.password)) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: createJWT(user._id)
        };
    }else { 
        // res.status(401);
        throw new Error("账号或密码不正确");
    }
})

/**
 * @desc 获取用户信息
 * @router GET/api/user/info
 * @access 需要验证
 */
const getUserInfo = asyncHandle(async (req, res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        }
    }else {
        res.status(404);
        throw new Error("用户不存在")
    }
})
module.exports = {userLogin, getUserInfo, userRegister} 
