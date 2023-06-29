const getPokemonsByOrder = (pokemons, order) => {

    if (order === "A-Z") {
        return pokemons.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (order === "Z-A") {
        return pokemons.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (order === "STRONGER") {
        return pokemons.sort((a, b) => b.attack - a.attack);
    };
    if (order === "WEAKER") {
        return pokemons.sort((a, b) => a.attack - b.attack);
    }
    else{
        return pokemons;
    }
    
};
module.exports = getPokemonsByOrder;