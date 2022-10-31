const User = require("../models/user");

exports.postAddUsers = async(req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user)

  } catch (error) {
    res.status(400).send(error)
  }

};

exports.getUsers = async(req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users)
  } catch (error) {
    res.status(404).send(error)
  }

};
