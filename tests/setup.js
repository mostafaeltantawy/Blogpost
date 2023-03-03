jest.setTimeout(30000);
console.log(process.env.NODE_ENV);
require("../models/User");
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.connect(keys.mongoURI);
