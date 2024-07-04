import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => console.error("Error while connecting to DB", err));

const app = express();

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});

app.use("/api/user", userRouter);
