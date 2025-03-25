# Authorization-app

## 📌 Description
Authorization-app is a **Node.js & Express** application that implements **role-based authentication and authorization** using **JWT (JSON Web Token)** and **MongoDB Atlas** as the database. It allows users to register, log in, and access protected routes based on their assigned roles.

## 🚀 Features
- User authentication with **JWT**
- Role-based access control (RBAC)
- Secure password hashing using **bcrypt**
- Protected API routes with authentication middleware
- MongoDB Atlas as a cloud database

## 📁 Project Structure
```
authorization-app/
│── src/
│   ├── config/        # Database connection & environment setup
│   ├── controllers/   # Business logic for authentication & user management
│   ├── middlewares/   # Authentication & authorization middleware
│   ├── models/        # Mongoose schemas and models
│   ├── routes/        # API routes for authentication & protected access
│   ├── index.js       # Main application entry point
│── package.json       # Dependencies and scripts
│── README.md          # Project documentation
```

## 🛠️ Technologies Used
- **Node.js** & **Express.js** - Backend framework
- **MongoDB Atlas** - Cloud-based NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **JWT (jsonwebtoken)** - Token-based authentication
- **dotenv** - Manage environment variables

## ⚙️ Installation & Setup
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/Authorization-app.git
   cd Authorization-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
     JWT_SECRET=your_secret_key
     PORT=7002
     ```

4. **Run the application**
   ```sh
   npm start
   ```
   - The server will run on **http://localhost:7002**


## 🔐 Role-Based Access Control
- **Admin** - Can access all protected routes
- **User** - Can access limited routes
- **Middleware** ensures that only authorized roles can access certain endpoints

## 🛠️ Deployment
- Deploy using **Render**, **Heroku**, or **Vercel**.
- Make sure to set the correct **MongoDB Atlas URI** and **JWT Secret** in your hosting environment.

