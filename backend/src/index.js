import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import  { connectDB }  from "./lib/db.js";

const app=express();
app.use(express.json());
app.use("/api/auth",authRoutes);


dotenv.config();
const PORT=process.env.PORT;
// app.use(express.urlencoded({ extended: true }));


app.listen(PORT,()=>{
  console.log("Server is running on port :",PORT);
  connectDB();
})

export default app;
