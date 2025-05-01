  import express from "express";
  import dotenv from "dotenv"
  import cookieParser from "cookie-parser"
  import cors from "cors"

  import authRoutes from "./routes/auth.routes.js"
  import messageRoutes from "./routes/message.routes.js"
  import  { connectDB }  from "./lib/db.js";
import { app,server } from "./lib/socket.js";
  dotenv.config();
  

  const PORT=process.env.VITE_PORT;
  app.use(express.json({ limit: '10mb' }));
  app.use(cookieParser());
  app.use(cors({
    origin:process.env.VITE_FRONTEND_URL,
    credentials:true,
  }))


  app.use("/api/auth",authRoutes);
  app.use("/api/messages",messageRoutes);
  app.get("/",(req,res)=>{
    res.send("Namaste Dunita");
  })

  server.listen(PORT,'0.0.0.0',()=>{
    console.log("Server is running on port :",PORT);
    connectDB();
  })

  export default app;
