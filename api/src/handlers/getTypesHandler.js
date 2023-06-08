const getTypes = require("../controllers/getTypes")

const getTypesHandler = async (req, res) => {
    const types = await getTypes()
    try {
        return res.status(200).json(types)
    }
    catch (error) {
        return res.status(200).json(error.message)
    }
}

module.exports = getTypesHandler