import express from "express";
import { addUser, getUsers } from "../controllers/controller.js";

// using express's Router for routing the requests
const router = express.Router();

// creating the endpoints
router.route("/user").get(getUsers).post(addUser);

export { router };
