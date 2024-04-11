const mongoose = require("mongoose");
const User = require("./User");
const Post = require("./Post");
const CONFIG = require("../configs/db.json")["development"];

mongoose
  .connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
  .catch((err) => {
    console.log("connect failed");
    process.exit(1);
  });

module.exports = {
  User,
  Post,
};
