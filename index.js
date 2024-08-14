// imports
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// utiles
const connectDB = require('./config/db');
const userRoutes = require('./routes/usersRouts');

dotenv.config({ path: path.join(__dirname, "config", ".env") });

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));