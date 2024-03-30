import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();
//create a route
route.post('/',verifyAdmin, createHotel)
//update a route
route.put("/:id", verifyAdmin, updateHotel);
//delete a route
route.delete("/:id", verifyAdmin, deleteHotel);
route.get("/find/:id",getHotel );
route.get("/", getHotels);
route.get("/countByCity", countByCity);
route.get("/countByType", countByType);
export default route;
