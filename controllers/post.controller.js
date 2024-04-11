const { Post } = require("../models");

module.exports.createPost = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId },
    } = req;
    const createPost = await Post.create({ ...body, author: userId });
    res.status(201).send(createPost);
  } catch (error) {
    next(error);
  }
};

module.exports.getAllPosts = async (req, res, next) => {
  try {
    const {
      query: { limit, skip },
    } = req;
    const allPosts = await Post.find()
      .populate("author")
      .limit(limit)
      .skip(skip);
    res.status(200).send(allPosts);
  } catch (error) {
    next(error);
  }
};

module.exports.getOnePost = async (req, res, next) => {
  try {
    const {
      params: { postId },
    } = req;
    const onePost = await Post.findById(postId).populate("author");
    res.status(200).send(onePost);
  } catch (error) {
    next(error);
  }
};

module.exports.updatePost = async (req, res, next) => {
  try {
    const {
      params: { postId },
      body,
    } = req;
    const updatePost = await Post.findByIdAndUpdate(postId, body).populate(
      "author"
    );
    res.status(201).send(updatePost);
  } catch (error) {
    next(error);
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const {
      params: { postId },
    } = req;
    const deletePost = await Post.findByIdAndDelete(postId);
    res.status(204).send(`Post ${postId} deleted`);
  } catch (error) {
    next(error);
  }
};
