const User = require("../models/user");

exports.postAddUsers = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  const user = new User({
    name: name,
    email: email,
  });
  user
    .save()
    .then((result) => {
      console.log("User Created:", result);
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      console.log(users);
      res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
};
