import { POST_POKEMON, GET_TYPES } from "./action_types";



const initialState = {
    pokemons: [],
    types: []
}

const reducer = (state = initialState, actions) => {

    switch (actions.type) {
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
                ...state
            }
    }
}

export default reducer