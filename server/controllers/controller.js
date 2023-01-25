import expressAsyncHandler from 'express-async-handler';
import { User } from '../models/model.js';

// using post method to initially enter few entries into MongoDB
const addUser = expressAsyncHandler(async (req, res) => {
  const data = {
    fname: 'Hiren',
    lname: 'Vara',
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
    const { page, limit } = req.query;
    const getUsersFromPageNo = async () => {
      if (parseInt(page) === 1) {
        return await User.find({}).limit(limit);
      }
      return await User.find({})
        .skip((page - 1) * limit)
        .limit(limit);
    };
    const users = await getUsersFromPageNo();
    const totalAvailable = await User.find({}).count();
    const resp = {
      users,
      totalAvailable,
    };

    if (users && totalAvailable) {
      res.json(resp);
    }
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

export { addUser, getUsers };
