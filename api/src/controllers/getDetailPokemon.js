const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

const getDetailPokemon = async (id) => {
    if (isNaN(Number(id))) {
        return await Pokemon.findOne({
            where: {
                id: id,
            },
            include: {
                model : Type,
                attributes : ["name"]
            }
        })
    }
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = data
    const pokemonById = {
        id: pokemon.id,
        name: pokemon.name,
        imagen: pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other["official-artwork"].front_default,
        health: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[3].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map(type =>
            type.type.name
        )
    }
    return pokemonById
}

module.exports = getDetailPokemon