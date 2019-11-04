const mongoose = require("mongoose");
const User = require("./User");
// import Message from './message';
require("dotenv").config();

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = { User, connectDb };