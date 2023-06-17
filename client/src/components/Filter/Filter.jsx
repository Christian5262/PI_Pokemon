import { useDispatch, useSelector } from "react-redux"
import { filterPokemons } from "../../redux/actions"
import { useState } from "react"



const Filter = () => {

    const dispatch = useDispatch()

    const [type, setType] = useState("")

    const types = useSelector(state => state.types)
    const allPokemons = useSelector(state => state.copyPokemon)

    const handleSelect = (event) => {
        dispatch(filterPokemons(event.target.value))

    }

    return (
        <div>
            <label htmlFor=""><input type="radio" value="" name="Tipos" onChange={handleSelect} />Todos los pokemos</label>
            {
                types?.map(type => {
                    return (
                        <label key={type.id}>{type.name}<input type="radio" onChange={handleSelect} name="Tipos" value={type.name} /></label>
                    )
                })
            }
        </div>
    )

}

export default Filter