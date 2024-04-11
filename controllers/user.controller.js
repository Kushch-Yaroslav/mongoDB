const { User } = require("../models");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
    const allUsers = await User.find();
    res.status(201).send(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports.getOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findById(userId);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
      body,
    } = req;
    const user = await User.findByIdAndUpdate(userId, body, { new: true });
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const deletedUser = await User.deleteOne({ _id: userId });
    res.status(204).send(`User ${userId} is deleted`);
  } catch (error) {
    next(error);
  }
};
