const postPokemon = require("../controllers/postPokemon.js");


const pokemonPostHandler = async (req, res) => {
    const { name, image, health, attack, defense, speed, height, weight, typeId } = req.body
    try {
        const pokemonCreate = await postPokemon(name, image, health, attack, defense, speed, height, weight, typeId)
        res.status(200).json(pokemonCreate)
    } catch (error) {
        res.status(400).json(error)
    }

}

module.exports = pokemonPostHandler;