const WorkSystem = require("../models/workSystem");

exports.postAddWorkSystem = async (req, res, next) => {
  try {
    const workSystem = new WorkSystem(req.body);
    await workSystem.save();
    res.status(200).send(workSystem);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

exports.getWorkSystem = async (req, res, next) => {
  try {
    const workSystem = await WorkSystem.find().populate("user", "email");
    res.status(200).send(workSystem);
  } catch (error) {
    res.status(404).send(error);
  }
};
