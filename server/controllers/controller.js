import expressAsyncHandler from "express-async-handler";
import { User } from "../models/model.js";

// using post method to initially enter few entries into MongoDB
const addUser = expressAsyncHandler(async (req, res) => {
  const data = {
    fname: "Hiren",
    lname: "Vara",
  };

  try {
    const isDataAddedToDB = await User.create(data);

    if (isDataAddedToDB) {
      res.json(data);
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// get the users from DB
const getUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});

    if (users) {
      res.json(users);
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export { addUser, getUsers };
