const { Pokemon } = require("../db.js");



const postPokemon = async (detailsPokemon, relation) => {

    // if (Object.values(detailsPokemon).length !== 8 && Object.values(relation).length !== 1) throw Error("Falta ingresar datos")

    const { name, image, health, attack, defense, speed, height, weight } = detailsPokemon
    const { typeId } = relation

    const pokemon = await Pokemon.create({ name, image, health, attack, defense, speed, height, weight })
    for (let i = 0; i < typeId.length; i++) {
        const element = typeId[i];
        await pokemon.addType(element)
        
    }
    return pokemon

};

module.exports = postPokemon