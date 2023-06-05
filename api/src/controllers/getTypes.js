const { Type } = require("../db.js")

const getTypes = async () => {
    return await Type.findAll()
}

module.exports = getTypes;