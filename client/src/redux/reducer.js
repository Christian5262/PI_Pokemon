import { POST_POKEMON, GET_TYPES, GET_POKEMON, GET_DETAIL_POKEMON, CLEAN_DETAIL, ACTIVE, ERROR, CLEAN_MESSAGE, } from "./action_types";
import { currentPage } from "./actions";



const initialState = {
    pokemons: [],
    copyPokemon: [],
    types: [],
    detailPokemon: {},
    isActive: null,
    errorMessage: ""

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
        case ACTIVE:
            return {
                ...state,
                isActive: actions.payload
            }
        case ERROR:
            return {
                ...state,
                errorMessage: actions.payload
            }
        case CLEAN_MESSAGE:
            return {
                ...state,
                errorMessage: ""
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducer