const { Pokemon, Type } = require("../db.js")
const axios = require("axios");
require('dotenv').config();
const { URL } = process.env

let pokemonInCache = null

const getPokemonsApi = async () => {
    if (pokemonInCache) return pokemonInCache
    try {
        let pokemons = []
        let urlApi = URL
        while (urlApi) {
            const { data } = await axios.get(urlApi)
            let pokemonsinApi = data.results.map(async (pokemon) => {
                const { data } = await axios.get(pokemon.url)
                return data
            })
            let allPokemon = (await Promise.all(pokemonsinApi))
            for (let i = 0; i < allPokemon.length; i++) {
                const pokemon = allPokemon[i]
                const pokemonInfo = {
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
                pokemons.push(pokemonInfo)
            }
            urlApi = data.next
        }
        pokemonInCache = pokemons
        return pokemons
    } catch (error) {
        return error
    }


}

const getPokemonDb = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"]
        }
    })
}

const getAllPokemon = async () => {
    const pokemonApi = await getPokemonsApi();
    const pokemonDb = await getPokemonDb();
    const allPokemons = [...pokemonApi, ...pokemonDb]
    return allPokemons
}

module.exports = getAllPokemon