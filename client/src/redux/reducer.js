import { POST_POKEMON, GET_TYPES, GET_POKEMON, GET_DETAIL_POKEMON, CLEAN_DETAIL, } from "./action_types";
import { currentPage } from "./actions";



const initialState = {
    pokemons: [],
    copyPokemon: [],
    types: [],
    detailPokemon: {},
    type: ""

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

        default:
            return {
                ...state,
                currentPage: actions.payload
            }
    }
}

export default reducer