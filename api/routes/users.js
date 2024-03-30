import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const route = express.Router();

route.get('/checkauthentication',verifyToken,(req,res,next) => {
  res.send("hello user ,you are logged in")
})
route.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user ,you are logged in and you can delete your account");
});
route.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin ,you are logged in and you can delete all accounts");
});
//update a route
route.put("/:id", verifyUser,updateUser);
//delete a route
route.delete("/:id", verifyUser,deleteUser);
route.get("/:id", verifyUser,getUser);
route.get("/", verifyAdmin,getUsers);
export default route;
