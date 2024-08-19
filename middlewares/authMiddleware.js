const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("./asyncHandler");

exports.authenticate = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  
  console.log(req.cookies, "r");
  console.log(req.cookies.jwt), "jwt";

  

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);        
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error("Token verification failed:", error.message);
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
});

exports.authorizeAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
});

