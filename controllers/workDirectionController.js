const WorkDirection = require('../models/workDirection');

exports.addWorkDirection = async(req,res,next) => {
    try {
    const workDirection = new WorkDirection(req.body);
    await workDirection.save();
    res.status(200).send(workDirection);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
}

exports.getWorkDirection = async(req,res,next) => {
    try {
        const workDirection = await WorkDirection.find().populate("user");
        res.status(200).send(workDirection)
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.updateWorkDirection = async(req,res,next) => {
  try {
    const workDirection = await WorkDirection.findOne({
      _id: req.params.workdirectionid,
    });
    Object.keys(req.body).map((key) => {
      workDirection[key] = req.body[key];
    });
    await workDirection.save();
    res.status(200).send(workDirection);
  } catch (error) {
    res.status(404).send(error);
  }
}