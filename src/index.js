const express = require('express');
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes') 
const dotenv = require("dotenv").config();
const userRouter = require('./routes/userRouter')
const verifyToken = require("./middlewares/authMiddleware");
const cors = require("cors");

dbConnect();



const app = express(); 
//middleware
 app.use(express.json())


 //routes 
 app.use("/api/auth" , authRoutes);
 app.use("/api/users" , userRouter)


 app.use(cors());
 
 //start the server
 const PORT = process.env.PORT || 7002;
 app.listen (PORT, () => {
    console.log(`server is running on ${PORT}`);
    })