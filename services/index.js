const express = require("express")
const app = express();
const productRoute = require("../routes/productRoute")
const dotenv = require("dotenv")
require("colors")
const errorHandleMiddleWare = require("../middlewares/errorHandleMiddleWare")
const notFoundMiddleWare = require("../middlewares/notFoundMiddleWare")
const userRoute = require("../routes/userRoute");

dotenv.config();

// 处理请求体中间件
app.use(express.json());
// 处理请求体中间件
app.use(express.urlencoded());

// 请求商品
app.use("/api/products", productRoute);
// 请求用户
app.use("/api/user", userRoute)


// 错误处理
app.use(errorHandleMiddleWare);

// 404中间件
app.use(notFoundMiddleWare)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`服务器在${process.env.NODE_ENV}环境下的${port}端口运行`.cyan.underline);
})