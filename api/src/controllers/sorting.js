const sort = async (pokemons, order) => {
    if (order === "A-Z") {
        return pokemons.sort((a, b) => a.name.localeCompare(b.name))
    }
    else return pokemons.sort((a, b) => b.name.localeCompare(a.name))
}
module.exports = sort