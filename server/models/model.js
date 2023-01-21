import mongoose from "mongoose";

const Schema = mongoose.Schema;

//prepare schema for a model
const userModel = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
});

// initialize the above model with mongoose
const User = mongoose.model("user", userModel);

export { User };
