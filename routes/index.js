const { Router } = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const rootRouter = Router();

rootRouter.use("/user", userRouter);
rootRouter.use("/post", postRouter);

module.exports = rootRouter;
