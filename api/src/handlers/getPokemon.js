const { getPokemonsApi, getPokemonDb, getAllPokemon } = require("../controllers/getAllPokemon.js");
const getDetailPokemon = require("../controllers/getDetailPokemon.js");
const getPokemonsByName = require("../controllers/getPokemonsByName.js");
const getPokemonsByType = require("../controllers/getPokemonsByType.js");
const getPokemonsByOrder = require("../controllers/getPokemonsByOrder.js");
const filterByOrigin = require("../controllers/getOriginPokemons.js");

const getPokemon = async (req, res) => {
    const { name, type, order, origin } = req.query;

    try {
        let pokemons = await filterByOrigin(origin);
        if (!name && !type && !order) {
            return res.status(200).json({ pokemons });
        }


        if (type) {
            pokemons = getPokemonsByType(pokemons, type);
        }

        if (name) {
            pokemons = getPokemonsByName(pokemons, name);
        }

        if (order) {
            pokemons = getPokemonsByOrder(pokemons, order);
        }

        return res.status(200).json({ pokemons });
    } catch (error) {
        return res.status(404).json(error.message);
    }
};

const getPokemonDetailHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const pokemonDetail = await getDetailPokemon(id);
        return res.status(200).json(pokemonDetail);
    } catch (error) {
        return res.status(204).json(error.message);
    }
};

module.exports = { getPokemon, getPokemonDetailHandler };