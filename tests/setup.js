jest.setTimeout(300000);
require("../models/User");
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.connect(keys.mongoURI);
