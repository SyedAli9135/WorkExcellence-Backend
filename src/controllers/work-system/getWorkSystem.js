const { WorkSystem } = require("../../models/workSystem");

const getWorkSystem = async(req, res) => {
    try {
        const workSystem = await WorkSystem.find().populate("user", "email");
        res.status(200).send(workSystem);
      } catch (error) {
        res.status(404).send(error);
      }
}

module.exports = getWorkSystem