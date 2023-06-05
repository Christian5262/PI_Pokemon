const getAllPokemonsApi = require("../controllers/getAllPokemon.js")
const getDetailPokemon = require("../controllers/getDetailPokemon.js")

const getPokemon = async (req, res) => {
    const pokemon = await getAllPokemonsApi()
    res.status(200).json(pokemon)
}

const getPokemonDetailHandler = async (req, res) => {
    const { id } = req.params

    try {
        const pokemonDetail = await getDetailPokemon(id)
        res.status(200).json(pokemonDetail)
    } catch (error) {
    }
}


module.exports = { getPokemon, getPokemonDetailHandler };