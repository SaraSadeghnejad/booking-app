import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const route = express.Router();
//create a route
route.post('/:hotelid',verifyAdmin, createRoom)
//update a route
route.put("/:id", verifyAdmin, updateRoom);
//delete a route
route.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
route.get("/:id",getRoom );
route.get("/", getRooms);


export default route;
