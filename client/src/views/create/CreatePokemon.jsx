import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTypes, postPokemon } from "../../redux/actions";
import validate from "./validate.js"
import styles from "./CreatePokemon.module.css"
import { useNavigate } from "react-router-dom";
import pokemons from "../../images/the_baby_pokemon_by_tails19950_d5ty8li-fullview.png"

const CreatePokemon = () => {

    const typesPokemon = useSelector(state => state.types)
    const dispatch = useDispatch()
    let [count, setCount] = useState(0)





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
        image: "",
        health: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        typeId: ""
    })


    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const { name, image, health, attack, defense, speed, height, weight } = input
    const handleChange = (event) => {
        let { value } = event.target

        setInput({
            ...input,
            [event.target.name]: value
        })
        setError(validate({
            ...input,
            [event.target.name]: value
        }))

    }

    const handlePushTypes = (event) => {

        const findId = input.typeId.findIndex(id => id === +event.target.value)
        if (findId === -1) {
            setInput({
                ...input,
                typeId: [...input.typeId, +event.target.value]
            })
            setCount(count += 1)
            return
        }
        else {
            const array = [...input.typeId]
            array.splice(findId, 1)
            setInput({
                ...input,
                typeId: array
            })
            setCount(count -= 1)
            return
        }




    }


    const handleBack = () => {
        navigate(-1)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(postPokemon(input))
        alert("Pokemon Creado")
        setInput({
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

    }

    return (
        <div className={styles.main}>
            <button onClick={() => { handleBack() }}>Inicio</button>
            <div className={styles.background}>
                <div className={styles.previewPokemon}>
                    <h1>Crea a tu pokemon</h1>
                    <img src={pokemons} alt="" />
                </div>
                <form className={styles.formStyle} onSubmit={onSubmit} >
                    <span className={styles.message}>Campos obligatorios.<span className={styles.required}>*</span></span>
                    <div className={styles.inputs}>
                        <div className={styles.inputBox}>
                            <label htmlFor="">Nombre
                                <span className={styles.required}>*</span></label>
                            <input className={error.name && styles.inputError} type="text" name="name" value={input.name} onChange={handleChange} placeholder="Ingresar nombre" />
                            {error.name && <span>{error.name}</span>}
                        </div>

                        <div className={styles.inputBox}>
                            <label htmlFor="">Imagen
                                <span className={styles.required}>*</span>
                            </label>
                            <input className={error.image && styles.inputError} type="text" name="image" value={input.image} onChange={handleChange} placeholder="Ingresa URL de imagen" />
                            {error.image && <span>{error.image}</span>}
                        </div>

                        <div className={styles.inputBox}>
                            <label htmlFor="">Salud
                                <span className={styles.required}>*</span></label>
                            <input type="range" name="health" value={input.health} onChange={handleChange} />
                            <p className={styles.countHealth}>{input.health}</p>
                            {error.health && <span>{error.health}</span>}

                        </div>

                        <div className={styles.inputBox}>
                            <label htmlFor="">Ataque
                                <span className={styles.required}>*</span></label>
                            <input className={error.attack && styles.inputError} type="number" name="attack" value={input.attack} onChange={handleChange} placeholder="Ingrese ataque" />
                            {error.attack && <span>{error.attack}</span>}
                        </div >
                        <div className={styles.inputBox}>
                            <label htmlFor="">Defensa
                                <span className={styles.required}>*</span>
                            </label>
                            <input className={error.defense && styles.inputError} type="number" name="defense" value={input.defense} onChange={handleChange} placeholder="Ingrese defensa" />
                            {error.defense && <span>{error.defense}</span>}
                        </div >
                        <div className={styles.inputBox}>
                            <label htmlFor="">Velocidad
                                <span className={styles.required}>*</span></label>

                            <input className={error.speed && styles.inputError} type="number" name="speed" value={input.speed} onChange={handleChange} placeholder="Ingrese velocidad" />
                            {error.speed && <span>{error.speed}</span>}
                        </div >

                        <div className={styles.inputBox}>

                            <label htmlFor="">Altura
                                <span className={styles.required}>*</span></label>
                            <input className={error.height && styles.inputError} type="number" name="height" value={input.height} onChange={handleChange} placeholder="Ingrese Altura" />
                            {error.height && <span>{error.height}</span>}
                        </div >

                        <div className={styles.inputBox}>
                            <label htmlFor="">Peso
                                <span className={styles.required}>*</span></label>
                            <input className={error.weight && styles.inputError} type="number" name="weight" value={input.weight} onChange={handleChange} placeholder="Ingrese peso" />
                            {error.weight && <span>{error.weight}</span>}
                        </div >
                    </div>
                    <h3>Selecciona tipo/tipos</h3>
                    <div className={styles.typesStyle}>
                        {

                            typesPokemon?.map(type => {
                                const alreadyExist = input.typeId.find(id => id === type.id)
                                return (
                                    <div key={type.id} className={styles.typeOfPokemon}>
                                        <label >{type.name}
                                        </label>
                                        <input type="checkbox" onChange={handlePushTypes}
                                            value={type.id
                                            }
                                            checked={!!alreadyExist}
                                            disabled={input.typeId.length === 3 && !alreadyExist}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {input.typeId.length === 3 && <p>Solo se pueden agregar 3 tipos por pokemon</p>}
                    {input.typeId.length < 1 && <span >Es obligatorio agregarle al menos un tipo al pokemon</span>}
                    <button disabled={!name || !image || +health === 0 || +attack === 0 || +defense === 0 || +speed === 0 || +height === 0 || +weight === 0 || count === 0 || input.typeId.length === 0 || Object.keys(error).length > 0} type="submit" > Crear pokemon </button>
                </form >
            </div >
        </div>
    );
}

export default CreatePokemon;