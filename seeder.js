const mongoose = require("mongoose");
require("colors")
const Order = require("./models/orderModel")
const Product = require("./models/productModel")
const User = require("./models/userModel")
const connectDB = require("./models/db")
const users = require("./data/users")
const products = require("./data/products")
const dotenv = require("dotenv")

dotenv.config();
connectDB();



async function importData() {
    try {
        // 清空数据库
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        // 导入数据
        const createdUser = await User.insertMany(users);
        const adminUser = createdUser[0]._id;
        const getNewProduct = products.map((product) => {
            return {
                ...product,
                user: adminUser
            }
        })
        await Product.insertMany(getNewProduct);

        console.log("数据导入成功".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

async function destoryData() {
    try {
        // 清空数据库
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("数据清除成功".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

process.argv[2] === "-d" ? destoryData() : importData();