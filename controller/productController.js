const Product = require("../models/productModel")
const {
    asyncHandle
} = require("../utils/handleResult")

const getAllProduct = asyncHandle(async (req, res) => {
    const result = await Product.find();
    return result;
})

const getProductById = asyncHandle(async (req, res) => {
    const result = await Product.findById(req.params.id);
    return result;
})

module.exports = {getAllProduct, getProductById}