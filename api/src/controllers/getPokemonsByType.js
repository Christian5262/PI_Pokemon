
const getPokemonsByType = (pokemons, type) => {
    const pokemonsTotal = pokemons.filter((pokemon) =>
        pokemon.types.includes(type.toLowerCase())
    );

    if (type === "all") return pokemons

    return pokemonsTotal;
};

module.exports = getPokemonsByType;