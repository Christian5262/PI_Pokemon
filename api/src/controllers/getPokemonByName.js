const { Pokemon } = require("../db.js");

const getPokemonByName = async (pokemons, name, typeFilter) => {

    //Al array donde estan todos los pokemones, hago un filtrado de nombres, coincidiendo a lo que se mande por query sea mayuscula o miniscula
    if (!typeFilter) {
        let pokemonName =pokemons.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(name.toLowerCase())
        })
        if(!pokemonName.length)throw Error("No hay pokemones con ese nombre")
        return pokemonName
    }
    if (!name) {
        return pokemons.filter(pokemon => {
            return pokemon.type.find(type => type === typeFilter)
        })
    }
    let pokemonsTotal =  pokemons.filter(pokemon => {
        let filterName = pokemon.name.toLowerCase().includes(name.toLowerCase())
        let filterType = pokemon.type.find(type => type === typeFilter)
        return filterName && filterType
    })
    if(!pokemonsTotal.length)throw Error("No hay pokemones con ese nombre")
    return pokemonsTotal
    // if (!pokemon.length) throw Error("El pokemon solicitado, no existe")
    // return pokemon
}

module.exports = getPokemonByName;