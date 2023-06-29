const { getPokemonsApi, getPokemonDb, getAllPokemon } = require("./getAllPokemon.js")


const filterByOrigin = async (origin) => {
    if (origin === "Api") {
        return await getPokemonsApi()
    }
    if (origin === "Db") {
        return await getPokemonDb()
    }
    return await getAllPokemon()
}

module.exports = filterByOrigin;