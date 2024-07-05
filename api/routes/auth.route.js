import express from "express";
import { authController } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signUp" , authController);

export default authRouter;