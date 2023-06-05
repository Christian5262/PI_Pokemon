const { Router } = require('express');
const { getPokemon, getPokemonDetailHandler } = require('../handlers/getPokemon.js');
const pokemonPostHandler = require('../handlers/postPokemonHandler.js');

const routerPokemon = Router()

routerPokemon.get("/pokemons", getPokemon)
routerPokemon.get("/pokemons/:id", getPokemonDetailHandler)
routerPokemon.post("/pokemons", pokemonPostHandler)


module.exports = routerPokemon;