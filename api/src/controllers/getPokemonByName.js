const { Pokemon } = require("../db.js");
const getAllPokemon = require("./getAllPokemon.js");

const getPokemonByName = async (name) => {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = data
    const pokemonName = {
        id: pokemon.id,
        name: pokemon.name,
        imagen: pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other["official-artwork"].front_default,
        health: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[3].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.types.map(type =>
            type.type.name
        )
    }
}

module.exports = getPokemonByName;