const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  address: {
    city: String,
    street: String,
    house: Number,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
