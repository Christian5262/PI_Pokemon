import axios from "axios"
import { POST_POKEMON, GET_TYPES } from "./action_types"


export const postPokemon = (pokemon) => {
    const endpoint = "http://localhost:3001/pokemons"
    return async (dispatch) => {
        const { data } = await axios.post(endpoint, pokemon)
        return dispatch({
            type: POST_POKEMON,
            payload: data
        })
    }
}

export const getTypes = () => {
    const endpoint = "http://localhost:3001/types"
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch(
            { type: GET_TYPES, payload: data }
        )
    }
}