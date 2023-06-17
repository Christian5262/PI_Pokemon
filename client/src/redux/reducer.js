import { POST_POKEMON, GET_TYPES, GET_POKEMON, GET_POKEMON_NAME, FILTER_POKEMONS, GET_DETAIL_POKEMON, ORDER_POKEMONS, CLEAN_DETAIL, CURRENT_PAGE } from "./action_types";
import { currentPage } from "./actions";



const initialState = {
    pokemons: [],
    copyPokemon: [],
    types: [],
    detailPokemon: {},
    currentPage : 0
}

const reducer = (state = initialState, actions) => {

    switch (actions.type) {
        case GET_POKEMON: {
            return {
                ...state,
                pokemons: actions.payload,
                copyPokemon: [...actions.payload]
            }
        }
        case GET_POKEMON_NAME: {
            return {
                ...state,
                pokemons: actions.payload
            }
        }
        case GET_DETAIL_POKEMON: {
            return {
                ...state,
                detailPokemon: actions.payload
            }
        }
        case CLEAN_DETAIL: {
            return {
                ...state,
                detailPokemon: {}
            }
        }
        case POST_POKEMON: {
            return {
                ...state,
                pokemons: [...state.pokemons, actions.payload]
            }
        }
        case GET_TYPES:
            return {
                ...state,
                types: actions.payload
            }
        case FILTER_POKEMONS:
        return {
            ...state,
            pokemons : actions.payload
        }
        case ORDER_POKEMONS:
            let orderPokemon = [...state.pokemons]

            return {
                ...state,

                pokemons: actions.payload === "A" ?
                    orderPokemon.sort((a, b) => a.name.localeCompare(b.name)) :
                    orderPokemon.sort((a, b) => b.name.localeCompare(a.name))
                        ||
                        actions.payload === "Stronger" ?
                        orderPokemon.sort((a, b) => a.attack - b.attack) :
                        orderPokemon.sort((a, b) => a.attack - b.attack) ||
                            actions.payload === "Restart" ?
                            state.copyPokemon : null
            }
        case CURRENT_PAGE : 
            return {
                ...state,
                currentPage : actions.payload

            }    


        default:
            return {
                ...state,
                currentPage : actions.payload
            }
    }
}

export default reducer