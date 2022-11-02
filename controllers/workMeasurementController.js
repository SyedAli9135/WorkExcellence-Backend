const WorkMeasurement = require('../models/workMeasurement');

exports.addWorkMeasurement = async(req, res, next) => {
    try {
        const workMeasurement = new WorkMeasurement(req.body);
        await workMeasurement.save();
        res.status(200).send(workMeasurement);
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
}

exports.getWorkMeasurement = async(req,res,next) => {
    try {
        const workMeasurement = await WorkMeasurement.find().populate("user");
        console.log(workMeasurement)
        res.status(200).send(workMeasurement)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}

exports.updateWorkMeasurement = async(req,res,next) => {
    try {
      const workMeasurement = await WorkMeasurement.findOne({
        _id: req.params.WorkMeasurementid
      });
      Object.keys(req.body).map((key) => {
        workMeasurement[key] = req.body[key];
      });
      await workMeasurement.save();
      res.status(200).send(workMeasurement);
    } catch (error) {
      res.status(404).send(error);
    }
  }

  exports.deleteWorkMeasurement = async(req,res,next) => {
    try {
        const workMeasurement = await WorkMeasurement.findById({
          _id: req.params.WorkMeasurementid
        })
       await workMeasurement.delete()
        console.log(workMeasurement)
        res.status(200).send("Record has been  deleted")
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
}