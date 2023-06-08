const { Type } = require("../db.js");
const axios = require("axios")

const saveTypesInDb = async () => {
    //Pido a la API la data de los tipos de pokemones y la guardo en mi base de datos
    const { data } =  await axios.get("https://pokeapi.co/api/v2/type")
    const types = data.results.map(type => {
        return {
            name : type.name
        }
    })
    return await Type.bulkCreate(types)
}

module.exports = saveTypesInDb