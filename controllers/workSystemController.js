const WorkSystem = require("../models/workSystem");
const User = require("../models/user");

exports.postAddWorkSystem = async (req, res, next) => {
  try {
    const workSystem = new WorkSystem({ ...req.body, user: req.user.id });
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

exports.getWorkSystemByUser = async (req, res, next) => {
  try {
    const workSystem = await WorkSystem.findOne({
      user: req.user.id,
    }).populate("user");
    res.status(200).send(workSystem);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateWorkSystem = async (req, res, next) => {
  try {
    const workSystem = await WorkSystem.findOne({
      _id: req.params.worksystemid,
      user: req.user.id,
    });
    Object.keys(req.body).map((key) => {
      workSystem[key] = req.body[key];
    });
    await workSystem.save();
    // const workSystem = await WorkSystem.findByIdAndUpdate(req.params.worksystemid, req.body);
    // await workSystem.save();
    res.status(200).send(workSystem);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

exports.deleteWorkSystem = async (req, res, next) => {
  try {
    const workSystem = await WorkSystem.findById({
      _id: req.params.worksystemid,
      user: req.user.id,
    });
    await workSystem.delete();
    res.status(200).send(workSystem);
  } catch (error) {
    res.status(404).send(error);
  }
};
