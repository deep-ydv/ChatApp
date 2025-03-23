import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controllers.js";
import {protectRoute} from "../middleware/protectRoute.middleware.js"
const router=express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

router.put("/update-profile",protectRoute,updateProfile);

router.get("/checkAuth",protectRoute,checkAuth);

export default router;