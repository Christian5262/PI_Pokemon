import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonByName } from "../../redux/actions"

const SearchBar = () => {

    const dispatch = useDispatch()


    const handleChange = (event) => {
        dispatch(getPokemonByName(event.target.value))
    }


    

    return (
        <div>
            <input type="text" placeholder="Busca el pokemon" onChange={handleChange} />
        </div>
    )

}

export default SearchBar