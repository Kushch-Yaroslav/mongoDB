const { Router } = require("express");
const PostController = require("../controllers/post.controller");

const postRouter = Router();

postRouter.post("/:userId", PostController.createPost);
postRouter.get("/:postId", PostController.getOnePost);
postRouter.get("/", PostController.getAllPosts);
postRouter.put("/:postId", PostController.updatePost);
postRouter.delete("/:postId", PostController.deletePost);
module.exports = postRouter;
