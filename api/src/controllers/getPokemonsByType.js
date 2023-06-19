const getPokemonsByType = (pokemons, type) => {
    const pokemonsTotal = pokemons.filter((pokemon) =>
        pokemon.type.includes(type.toLowerCase())
    );

    if (!pokemonsTotal.length) throw Error("No hay pokemones con ese nombre");

    return pokemonsTotal;
};

module.exports = getPokemonsByType;