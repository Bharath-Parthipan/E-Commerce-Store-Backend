const express = require("express");
const formidable = require("express-formidable");
const { authenticate, authorizeAdmin } = require("../middlewares/authMiddleware");
const { checkId } = require("../middlewares/checkId");
const { addProduct, updateProductDetails, removeProduct, fetchProducts, fetchProductById, addProductReview, fetchTopProducts, fetchNewProducts, fetchAllProducts, filterProducts } = require("../controllers/productController");

const router = express.Router();

router.route("/").get(fetchProducts).post(authenticate, authorizeAdmin, formidable(), addProduct);

router.route("/allproducts").get(fetchAllProducts);
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);

router.get("/top", fetchTopProducts);
router.get("/new", fetchNewProducts);

router.route("/:id").get(fetchProductById).put(authenticate, authorizeAdmin, formidable(), updateProductDetails).delete(authenticate, authorizeAdmin, removeProduct);
router.route("/filtered-products").post(filterProducts);

module.exports = router;