import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTypes, postPokemon } from "../../redux/actions";
import { validate } from "./validate";
import styles from "./CreatePokemon.module.css"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreatePokemon = () => {

    const typesPokemon = useSelector(state => state.types)
    // const createPokemon = useSelector(state => state.pokemons)
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

    const navigate = useNavigate()

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

        const findId = input.typeId.findIndex(id => id === +event.target.value)
        if (findId === -1) {
            if (input.typeId.length === 3) return "Solo se puede agregar 3 tipos"
            setInput({
                ...input,
                typeId: [...input.typeId, +event.target.value]
            })
            return
        }
        const array = [...input.typeId]
        array.splice(findId, 1)
        setInput({
            ...input,
            typeId: array
        })




    }

    const handleBack = () => {
        navigate(-1)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(postPokemon(input))

    }

    return (
        <div className={styles.main}>
            <div className={styles.background}>
            <button onClick={() => { handleBack() }}>Inicio</button>
                <form className={styles.formStyle} onSubmit={onSubmit} >
                    <h1>Create pokemon</h1>
                    <div className={styles.inputBox}>
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Ingresar nombre" />
                        {error.name && <p>{error.name}</p>}
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="">Imagen</label>
                        <input type="text" name="image" value={input.image} onChange={handleChange} placeholder="Ingrese Url de imagen" />
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="">Salud</label>
                        <input type="range" name="health" value={input.health} onChange={handleChange} placeholder="Ingrese salud del pokemon"/>
                        {error.health && <p>{error.health}</p>}
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="">Ataque</label>
                        <input type="number" name="attack" value={input.attack} onChange={handleChange} placeholder="Ingrese ataque" />
                    </div >

                    <div className={styles.inputBox}>
                        <label htmlFor="">Defensa</label>
                        <input type="number" name="defense" value={input.defense} onChange={handleChange} placeholder="Ingrese defensa"/>
                    </div >

                    <div className={styles.inputBox}>
                        <label htmlFor="">Velocidad</label>
                        <input type="number" name="speed" value={input.speed} onChange={handleChange} placeholder="Ingrese velocidad" />
                    </div >

                    <div className={styles.inputBox}>

                        <label htmlFor="">Altura</label>
                        <input type="number" name="height" value={input.height} onChange={handleChange} placeholder="Ingrese Altura"/>
                        <br />
                        {error.height && <p>{error.height}</p>}
                    </div >

                    <div className={styles.inputBox}>
                        <label htmlFor="">Peso</label>
                        <input type="number" name="weight" value={input.weight} onChange={handleChange} placeholder="Ingrese peso"/>
                    </div >
                    <h3>Ingrese los tipos de su pokemon</h3>
                    <div className={styles.typesStyle}>
                        {

                            typesPokemon?.map(type => {
                                const alreadyExist = input.typeId.find(id => id === type.id)
                                return (
                                    <div key={type.id}>
                                        <label >{type.name}<input type="checkbox" onChange={handlePushTypes}
                                            value={type.id
                                            }
                                            checked={!!alreadyExist}
                                            disabled={input.typeId.length === 3 && !alreadyExist}
                                        />
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button type="submit" > Enviar </button>
                </form >
            </div >
        </div>
    );
}

export default CreatePokemon;