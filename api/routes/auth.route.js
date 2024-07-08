import express from "express";
import { signUpController, signInController } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signUp" , signUpController);
authRouter.post("/signIn" , signInController);

export default authRouter;