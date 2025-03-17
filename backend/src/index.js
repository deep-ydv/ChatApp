import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import  { connectDB }  from "./lib/db.js";

const app=express();
app.use("/api/auth",authRoutes);

app.use(express.json());

dotenv.config();
const PORT=process.env.PORT;



app.listen(PORT,()=>{
  console.log("Server is running on port :",PORT);
  connectDB();
})

export default app;
