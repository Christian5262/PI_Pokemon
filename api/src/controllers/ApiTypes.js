const { Type } = require("../db.js");
const axios = require("axios")

const saveTypesInDb = async () => {
    const { data } =  await axios.get("https://pokeapi.co/api/v2/type")
    const types = data.results.map(type => {
        return {
            name : type.name
        }
    })
    return await Type.bulkCreate(types)
}

module.exports = saveTypesInDb