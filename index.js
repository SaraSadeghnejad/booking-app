import express from "express"
import mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const app =express();
const connect = async()=>{
try {
  await mongoose.connect('mongodb+srv://sarasadeghnejad33:VRjoxk6yabb6BH0F@cluster0.4se1n0h.mongodb.net/ecommerceData');
  console.log('connected to mong');
} catch (error) {
  throw error;
}
}

app.listen(8800,()=>{
    connect()
    console.log("Connected to the backend")
})