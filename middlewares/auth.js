const jwt = require("jsonwebtoken");
const User = require("../models/user");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(403).send({
      message: "Forbidden",
    });

  try {
    const user = jwt.verify(token, process.env.authToken);
    req.user = user;
    next();
  } catch (error) {
    res.status(403).send({
      message: "Forbidden, Access not granted",
    });
  }
};

module.exports = verifyToken;
