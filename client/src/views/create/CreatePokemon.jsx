import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTypes, postPokemon } from "../../redux/actions";
import { validate } from "./validate";

const CreatePokemon = () => {

    const typesPokemon = useSelector(state => state.types)
    const createPokemon = useSelector(state => state.pokemons)
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: "",
        image: "",
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        typeId: []
    })

    const [error, setError] = useState({
        name: "",
        health: "",
        height: ""
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        validate(input, error, setError)
    }

    const handlePushTypes = (event) => {
        setInput({
            ...input,
            typeId: [...input.typeId, +event.target.value]
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(postPokemon(input))

    }

    console.log(input);

    return (
        <div>
            <form onSubmit={onSubmit} >
                <label htmlFor="">Nombre</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} />
                {error.name && <p>{error.name}</p>}
                <br />
                <label htmlFor="">Imagen</label>
                <input type="text" name="image" value={input.image} onChange={handleChange} />
                <br />
                <label htmlFor="">Salud</label>
                <input type="range" name="health" value={input.health} onChange={handleChange} />
                {error.health && <p>{error.health}</p>}
                <br />
                <label htmlFor="">Ataque</label>
                <input type="number" name="attack" value={input.attack} onChange={handleChange} />
                <br />
                <label htmlFor="">Defensa</label>
                <input type="number" name="defense" value={input.defense} onChange={handleChange} />
                <br />
                <label htmlFor="">Velocid ad</label>
                <input type="number" name="speed" value={input.speed} onChange={handleChange} />
                <br />
                <label htmlFor="">Altura</label>
                <input type="number" name="height" value={input.height} onChange={handleChange} />
                {error.height && <p>{error.height}</p>}
                <br />
                <label htmlFor="">Peso</label>
                <input type="number" name="weight" value={input.weight} onChange={handleChange} />
                <br />
                <label>Tipos</label>

                {
                    typesPokemon?.map(type => {
                        return (<input type="radio"/>)
                    })
                }
                
                <select onChange={handlePushTypes}>
                    <option>Seleccionar tipo</option>
                    {
                        typesPokemon?.map(type => {
                            return (<option key={type.id} value={type.id}>
                                {type.name}
                            </option>)
                        })
                    }
                </select>
                <br />
                <button type="submit" disabled>Crear pokemon</button>
            </form>
        </div>
    );
}

export default CreatePokemon;