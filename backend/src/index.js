  import express from "express";
  import dotenv from "dotenv"
  import cookieParser from "cookie-parser"
  import cors from "cors"

  import authRoutes from "./routes/auth.routes.js"
  import messageRoutes from "./routes/message.routes.js"
  import  { connectDB }  from "./lib/db.js";
  dotenv.config();
  const app=express();

  const PORT=process.env.PORT;
  app.use(express.json({ limit: '10mb' }));
  app.use(cookieParser());
  app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
  }))


  app.use("/api/auth",authRoutes);
  app.use("/api/messages",messageRoutes);

  app.listen(PORT,()=>{
    console.log("Server is running on port :",PORT);
    connectDB();
  })

  export default app;
