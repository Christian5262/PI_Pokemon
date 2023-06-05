const { Pokemon } = require("../db.js");



const postPokemon = async (name, image, health, attack, defense, speed, height, weight, typeId) => {

    const pokemon = await Pokemon.create({name, image, health, attack, defense, speed, height, weight})
    await pokemon.addType(typeId)
    return pokemon

};

module.exports = postPokemon