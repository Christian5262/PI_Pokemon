import axios from "axios";
import {
    POST_POKEMON,
    GET_TYPES,
    GET_POKEMON,
    GET_DETAIL_POKEMON,
    CLEAN_DETAIL,
    ACTIVE,
    ERROR,
    CLEAN_MESSAGE

} from "./action_types";
import { NAME_PARAM, TYPE_PARAM, ORDER_PARAM, ORIGIN_PARAM } from "../utils/constants";

export const getsPokemon = () => {
    const url = new URL("http://localhost:3001/pokemons");
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);

    const [origin, name, type, order] = [searchParams.get(ORIGIN_PARAM), searchParams.get(NAME_PARAM), searchParams.get(TYPE_PARAM), searchParams.get(ORDER_PARAM)];

    if (origin) {
        url.searchParams.set(ORIGIN_PARAM, origin)
    }

    if (name) {
        url.searchParams.set(NAME_PARAM, name);
    }

    if (type) {
        url.searchParams.set(TYPE_PARAM, type);
    }
    if (order) {
        url.searchParams.set(ORDER_PARAM, order);
    }
    return async (dispatch) => {
        try {
            const { data } = await axios.get(url);

            return dispatch({
                type: GET_POKEMON,
                payload: data.pokemons,
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.response.data
            })
        }

    };
};



export const getDetailPokemon = (id) => {
    const endpoint = `http://localhost:3001/pokemons/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            return dispatch({
                type: GET_DETAIL_POKEMON,
                payload: data,
            });
        } catch (error) {
            console.log(error);;
        }

    };
}
export const cleanDetailPokemon = () => {
    return async (dispatch) => {
        return dispatch({
            type: CLEAN_DETAIL,
        });
    };
};

export const cleanMessage = () => {
    return async (dispatch) => {
        return dispatch({
            type: CLEAN_MESSAGE
        })
    }
}

export const postPokemon = (pokemon) => {
    const endpoint = "http://localhost:3001/pokemons";
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, pokemon);
            return dispatch({
                type: POST_POKEMON,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }

    };
}

export const getTypes = () => {
    const endpoint = "http://localhost:3001/types";
    return async (dispatch) => {
        const { data } = await axios.get(endpoint);
        return dispatch({ type: GET_TYPES, payload: data });
    };
};

export const isActive = (value) => {
    return dispatch => {
        return dispatch({ type: ACTIVE, payload: value })
    }
}



























// import axios from "axios"
// import { POST_POKEMON, GET_TYPES, GET_POKEMON, GET_POKEMON_NAME, FILTER_POKEMONS, GET_DETAIL_POKEMON, ORDER_POKEMONS, CLEAN_DETAIL, CURRENT_PAGE } from "./action_types"

// export const getsPokemon = () => {
//     const endpoint = "http://localhost:3001/pokemons"
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint)
//         return dispatch({
//             type: GET_POKEMON,
//             payload: data
//         });
//     };
// };

// export const getDetailPokemon = (id) => {
//     const endpoint = `http://localhost:3001/pokemons/${id}`
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint)
//         return dispatch({
//             type: GET_DETAIL_POKEMON,
//             payload: data
//         });
//     };
// };

// export const cleanDetailPokemon = () => {
//     return async (dispatch) => {
//         return dispatch({
//             type: CLEAN_DETAIL
//         })
//     }
// }

// export const getPokemonByName = (name) => {
//     const endpoint = `http://localhost:3001/pokemons?name=${name}`
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint)
//         return dispatch({
//             type: GET_POKEMON_NAME,
//             payload: data
//         });
//     };
// };


// export const postPokemon = (pokemon) => {
//     const endpoint = "http://localhost:3001/pokemons"
//     return async (dispatch) => {
//         const { data } = await axios.post(endpoint, pokemon)
//         return dispatch({
//             type: POST_POKEMON,
//             payload: data
//         });
//     };
// };

// export const getTypes = () => {
//     const endpoint = "http://localhost:3001/types"
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint)
//         return dispatch(
//             { type: GET_TYPES, payload: data }
//         )
//     };
// };

// export const filterPokemons = (type) => {
//     const endpoint = `http://localhost:3001/pokemons?type=${type}`
//     return async (dispatch) => {
//         const { data } = await axios.get(endpoint)
//         return dispatch(
//             { type: FILTER_POKEMONS, payload: data }
//         );
//     };
// };

// export const orderPokemons = (order) => {
//     return async (dispatch) => {
//         return dispatch(
//             {
//                 type: ORDER_POKEMONS,
//                 payload: order
//             }
//         );
//     };
// };

// export const currentPage = (page) => {
//     return async (dispatch) => {
//         return dispatch(
//             {
//                 type: CURRENT_PAGE,
//                 payload: page
//             }
//         )
//     }
// }