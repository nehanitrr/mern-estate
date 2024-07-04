import express from 'express';
import { userController } from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.get("/" , userController );

export default userRouter;