const express = require("express")
const router = express.Router();
const {getAllProduct, getProductById} = require("../controller/productController") 

router.route("/").get(getAllProduct);

router.route("/:id").get(getProductById);

module.exports = router;