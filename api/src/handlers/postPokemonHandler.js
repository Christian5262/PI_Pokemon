const postPokemon = require("../controllers/postPokemon.js");


const pokemonPostHandler = async (req, res) => {
    const { name, image, health, attack, defense, speed, height, weight, typeId } = req.body
    const detailsPokemon = {
        name, image, health, attack, defense, speed, height, weight
    }
    const relation = {
        typeId
    }
    try {
        const pokemonCreate = await postPokemon(detailsPokemon, relation)
        res.status(200).json(pokemonCreate)
    } catch (error) {
        res.status(400).json(error.message)
    }

}

module.exports = pokemonPostHandler;