const getTypes = require("../controllers/getTypes")

const getTypesHandler = async (req, res) => {
    const types = await getTypes()
    res.status(200).json(types)
}

module.exports = getTypesHandler