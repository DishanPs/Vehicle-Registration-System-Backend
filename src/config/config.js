const mongoose = require("mongoose")
require('dotenv').config();
//dotenv.config();
//console.log(process.env)
//const DB = process.env.DATABASE;
const DB =  "mongodb://127.0.0.1/vehicle_Registration?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectDB = async () => {
  await mongoose.connect(DB, {
     useNewUrlParser: true ,
  });
  console.log("Database Connected");
};

module.exports = connectDB;

