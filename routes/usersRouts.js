const express = require("express");
const { authenticate, authorizeAdmin } = require("../middlewares/authMiddleware");
const { creatUsers, loginUser, logoutCurrentUser, getAllUsers, getCurrentUserProfile, updateCurrentUserProfile, deleteUserById, getUserById, updateUserById, } = require("../controllers/userController");

const router = express.Router();

router.route('/').post(creatUsers).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);
router.route('/profile').get(authenticate, getCurrentUserProfile).put(authenticate, updateCurrentUserProfile);

// Admin Routs 👇
router.route('/:id').delete(authenticate, authorizeAdmin, deleteUserById).get(authenticate, authorizeAdmin, getUserById).put(authenticate, authorizeAdmin, updateUserById);

module.exports = router;