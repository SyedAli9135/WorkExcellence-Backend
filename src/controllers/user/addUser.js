const { User } = require("../../models/user");

const addUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = new User({ name, email })
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = addUser