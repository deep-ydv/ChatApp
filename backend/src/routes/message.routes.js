import express from "express";
import { getMessages, getUsersForSidebar,sendMessage } from "../controllers/message.controllers.js";
import { protectRoute } from "../middleware/protectRoute.middleware.js";

const router=express.Router();

router.get("/users",protectRoute,getUsersForSidebar);

router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessage);

export default router;
