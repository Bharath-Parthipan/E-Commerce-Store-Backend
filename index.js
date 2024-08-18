// imports
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// utiles
const connectDB = require('./config/db');
const userRoutes = require('./routes/usersRouts');
const categoryRoutes = require('./routes/categoryRoute');
const productRoutes = require('./routes/productRoute');
const uploadRoutes = require('./routes/uploadRoute');
const orderRoutes = require("./routes/orderRoute");


dotenv.config({ path: path.join(__dirname, "config", ".env") });

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/upload', uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));