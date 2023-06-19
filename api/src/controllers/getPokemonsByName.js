const getPokemonByName = (pokemons, name) => {
    const pokemonsTotal = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name.toLowerCase())
    );

    if (!pokemonsTotal.length) throw Error("No hay pokemones con ese nombre");

    return pokemonsTotal;
};

module.exports = getPokemonByName;