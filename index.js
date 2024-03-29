import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import hotelRouter from "./routes/hotels.js";
import roomRouter from "./routes/rooms.js";
import userRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongo");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/users", userRouter);
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Hello error from handler";
  return res
    .status(errorStatus)
    .json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack
    });
});
app.listen(8800, () => {
  connect();
  console.log("Connected to the backend");
});
