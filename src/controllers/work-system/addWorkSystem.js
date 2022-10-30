const { WorkSystem } = require("../../models/workSystem");

const addWorkSystem = async (req, res) => {
    try {
        const workSystem = new WorkSystem(req.body);
        await workSystem.save();
        res.status(200).send(workSystem);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = addWorkSystem