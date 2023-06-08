const { Pokemon } = require("../db.js");
const getAllPokemon = require("./getAllPokemon.js");

const getPokemonByName = async (name) => {
    const allPokemon = getAllPokemon()
    //Al array donde estan todos los pokemones, hago un filtrado de nombres, coincidiendo a lo que se mande por query sea mayuscula o miniscula
    const pokemon = (await allPokemon).filter(pokemon => {
        return pokemon.name.toLowerCase().includes(name.toLowerCase())
    })
    if (!pokemon.length) throw Error("El pokemon solicitado, no existe")
    return pokemon
}

module.exports = getPokemonByName;