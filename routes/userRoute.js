const express = require("express")
const router = express.Router();
const {userLogin, getUserInfo, userRegister} = require("../controller/userController")
const authMiddleWare = require("../middlewares/authMiddleWare")

router.route("/").post(userRegister);

router.post("/login", userLogin);

router.route("/info").get(authMiddleWare, getUserInfo);

module.exports = router