import axios from "axios"
import { POST_POKEMON, GET_TYPES, GET_POKEMON, GET_POKEMON_NAME, FILTER_POKEMONS, GET_DETAIL_POKEMON, ORDER_POKEMONS, CLEAN_DETAIL, CURRENT_PAGE } from "./action_types"

export const getsPokemon = () => {
    const endpoint = "http://localhost:3001/pokemons"
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({
            type: GET_POKEMON,
            payload: data
        });
    };
};

export const getDetailPokemon = (id) => {
    const endpoint = `http://localhost:3001/pokemons/${id}`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({
            type: GET_DETAIL_POKEMON,
            payload: data
        });
    };
};

export const cleanDetailPokemon = () => {
    return async (dispatch) => {
        return dispatch({
            type: CLEAN_DETAIL
        })
    }
}

export const getPokemonByName = (name) => {
    const endpoint = `http://localhost:3001/pokemons?name=${name}`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch({
            type: GET_POKEMON_NAME,
            payload: data
        });
    };
};


export const postPokemon = (pokemon) => {
    const endpoint = "http://localhost:3001/pokemons"
    return async (dispatch) => {
        const { data } = await axios.post(endpoint, pokemon)
        return dispatch({
            type: POST_POKEMON,
            payload: data
        });
    };
};

export const getTypes = () => {
    const endpoint = "http://localhost:3001/types"
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        return dispatch(
            { type: GET_TYPES, payload: data }
        )
    };
};

export const filterPokemons = (type) => {
    const endpoint = `http://localhost:3001/pokemons?type=${type}`
    return async (dispatch) => {
        const { data } = await axios.get(endpoint)
        console.log(data);
        return dispatch(
            { type: FILTER_POKEMONS, payload: data }
        );
    };
};

export const orderPokemons = (order) => {
    return async (dispatch) => {
        return dispatch(
            {
                type: ORDER_POKEMONS,
                payload: order
            }
        );
    };
};

export const currentPage = (page) => {
    return async (dispatch) => {
        return dispatch(
            {
                type: CURRENT_PAGE,
                payload: page
            }
        )
    }
}