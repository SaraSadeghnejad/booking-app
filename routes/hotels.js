import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();
//create a route
route.post('/',verifyAdmin, createHotel)
//update a route
route.put("/:id", verifyAdmin, updateHotel);
//delete a route
route.delete("/:id", verifyAdmin, deleteHotel);
route.get("/:id",getHotel );
route.get("/", getHotels);

export default route;
