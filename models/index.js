// require db config
const dbConfig = require("../config/db.config")

// require mongose
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db  = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js");

module.exports = db;