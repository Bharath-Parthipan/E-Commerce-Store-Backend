# E-Commerce-Store-Backend

## Technologies Used
- Node.js: JavaScript runtime for server-side programming.
- Express.js: Web framework for building RESTful APIs.
- MongoDB: NoSQL database for storing user, product, and order data.
- Mongoose: ODM for MongoDB, providing schema-based data modeling.
- JWT: For secure token-based authentication.
- Bcrypt.js: For hashing user passwords.
- Multer: Middleware for handling file uploads.
- Dotenv: For environment variable management.
- CORS: Middleware for handling cross-origin requests.
- Concurrently: For running multiple commands concurrently during - development.
- Nodemon: For automatically restarting the server during development.

## Installation
#### Clone the repository:
```bash
git clone https://github.com/Bharath-Parthipan/E-Commerce-Store-Backend.git
cd backend
```
#### Install dependencies:
```bash
npm install
```
#### Set up environment variables:
```bash
PORT=5000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PAYPAL_CLIENT_ID=<your-paypal-client-id>
```
#### Start the server:
```bash
npm start
```

## Features
- User Authentication: Secure authentication using JWT.
- Product Management: CRUD operations for products.
- Order Management: Processing orders and payments.
- Admin Functionality: Admins can manage products, inventory, and sellers.
- Role-Based Access Control: Middleware for enforcing permissions.

## Scripts
- npm start: Runs the server in development mode.