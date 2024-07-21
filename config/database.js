const mongoose = require('mongoose');
const clgDev = require('../utils/clgDev');
const dotenv = require('dotenv');
const colors = require('colors');

//dotenv.config({ path: '/config.env' });
const url="mongodb+srv://parthlahoti5404:byF5sVig8UhFBY5i@cluster0.wbav0jr.mongodb.net/"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url);
    clgDev("MongoDB connected successfully".cyan.underline.bold);
  } catch (err) {
    clgDev(`${err.message}`.red.underline.bold);
    process.exit(1);
  }
}


// 2nd way to connect to mongo db
// const connectDB = () => {
//   mongoose.connect(process.env.MONGO_URI)
//     .then(() => clgDev("MongoDB connected successfully".cyan.underline.bold))
//     .catch((err) => {
//       clgDev(`${err.message}`.red.underline.bold);
//       process.exit(1);
//     });
// }


module.exports = connectDB;
