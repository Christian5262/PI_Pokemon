import { useDispatch, useSelector } from "react-redux";
import { filterPokemons, getsPokemon } from "../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAM, PAGES, TYPE_PARAM } from "../../utils/constants";
import { useEffect, useState } from "react";
import styles from "./Filter.module.css"

const Filter = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [select, setSelect] = useState(searchParams.get(TYPE_PARAM))

    //   const [type, setType] = useState("");
    const types = useSelector((state) => state.types);
    //   const allPokemons = useSelector((state) => state.copyPokemon);

    const active = useSelector(state => state.isActive)
    const handleSelect = (value) => {
        searchParams.set(TYPE_PARAM, value);
        searchParams.set(PAGES, 1)
        setSearchParams(searchParams);
        dispatch(
            getsPokemon()
        );
        setSelect(value)

    };

    return (
        <div className={`${styles.background} ${active && styles.active}`}>
            <div className={styles.pokemon}>
                <div className={styles.typeStyle}>
                    <label htmlFor="">
                        Todos
                        <input type="radio" value="all" name="Tipos" checked={select === "all"} onChange={(event) => handleSelect(event.target.value)} />
                    </label>
                </div>
                {types?.map((type) => {
                    return (
                        <div className={styles.typeStyle}>
                            <label className={styles[type.name]} key={type.id}>
                                {type.name}
                                <input
                                    type="radio"
                                    onChange={(event) => handleSelect(event.target.value)}
                                    name="Tipos"
                                    checked={select === type.name}
                                    value={type.name}
                                />
                            </label>
                        </div>
                    );
                })}
            </div>
            {/* <select name="" id="">
                <option value="All">All</option>
                <option value="Api">Api</option>
                <option value="Created">Created</option> */}
            {/* </select> */}
        </div>
    );
};

export default Filter;



















// const Filter = () => {

//     const dispatch = useDispatch()

//     const [type, setType] = useState("")

//     const types = useSelector(state => state.types)
//     const allPokemons = useSelector(state => state.copyPokemon)

//     const handleSelect = (event) => {
//         dispatch(filterPokemons(event.target.value))

//     }

//     return (
//         <div>
//             <label htmlFor=""><input type="radio" value="" name="Tipos" onChange={handleSelect} />Todos los pokemos</label>
//             {
//                 types?.map(type => {
//                     return (
//                         <label key={type.id}>{type.name}<input type="radio" onChange={handleSelect} name="Tipos" value={type.name} /></label>
//                     )
//                 })
//             }
//         </div>
//     )

// }

// export default Filter