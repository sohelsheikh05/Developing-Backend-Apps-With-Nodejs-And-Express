import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ConnectDB from "./database/DB.js";
import authRoute from "./Routes/auth.route.js";
import bookRoute from "./Routes/book.route.js";
import reviewRoute from "./Routes/review.route.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use("/reviews",reviewRoute);
app.use("/books",bookRoute);
app.use("/auth",authRoute);
app.get("/",(req,res)=>{
    res.send("hello world");
}); 

app.listen(process.env.PORT ,()=>{
    ConnectDB();
    console.log("listening on port 3000");
});