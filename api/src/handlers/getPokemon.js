const getAllPokemonsApi = require("../controllers/getAllPokemon.js")
const getDetailPokemon = require("../controllers/getDetailPokemon.js");
const getPokemonByName = require("../controllers/getPokemonByName.js");

const getPokemon = async (req, res) => {
    const { name } = req.query
    const pokemon = await getAllPokemonsApi()
    try {
        if (!name) {
            return res.status(200).json(pokemon)
        }
        const pokemonByName = await getPokemonByName(name)
        return res.status(200).json(pokemonByName)
    } catch (error) {
        return res.status(200).json(error.message)
    }
};
const getPokemonDetailHandler = async (req, res) => {
    const { id } = req.params

    try {
        const pokemonDetail = await getDetailPokemon(id)
        return res.status(200).json(pokemonDetail)
    } catch (error) {
        return res.status(404).json(error.message)
    }
}


module.exports = { getPokemon, getPokemonDetailHandler };