const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  body: String,
  imgSrc: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
