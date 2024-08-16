const express = require("express");
const { authenticate, authorizeAdmin } = require("../middlewares/authMiddleware");
const { createCategory, updateCategory, removeCategory, listCategory, readCategory } = require("../controllers/categoryController");

const router = express.Router();

router.route('/').post(authenticate, authorizeAdmin, createCategory);
router.route('/:categoryId').put(authenticate, authorizeAdmin, updateCategory);
router.route('/:categoryId').delete(authenticate, authorizeAdmin, removeCategory);
router.route('/categories').get(listCategory);
router.route('/:id').get(readCategory);
module.exports = router;