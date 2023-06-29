import { useDispatch } from "react-redux"
import { getsPokemon } from "../../redux/actions"
import { useSearchParams } from "react-router-dom";
import { ORDER_PARAM, ORIGIN_PARAM, PAGES } from "../../utils/constants";
import { useState } from "react";
import styles from "./Sort.module.css"

const Sort = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const [select, setSelect] = useState(searchParams.get(ORDER_PARAM))
    const [origin, setOrigin] = useState(searchParams.get(ORIGIN_PARAM))


    const handleOrder = (value) => {
        searchParams.set(ORDER_PARAM, value)
        searchParams.set(PAGES, 1)
        setSearchParams(searchParams)
        dispatch(getsPokemon())
        setSelect(value)
    }

    const handleFilter = (value) => {
        searchParams.set(ORIGIN_PARAM, value)
        searchParams.set(PAGES, 1)
        setSearchParams(searchParams)
        dispatch(getsPokemon())
        setOrigin(value)
    }



    return (
        <div className={styles.contain}>
            <select className={styles.order} value={select} onChange={(event) => handleOrder(event.target.value)}>
                <option value="Restart">Orden por defecto</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
                <option value="STRONGER">Mas fuerte</option>
                <option value="WEAKER">Mas debil</option>
            </select>
            <select value={origin} className={styles.origin} onChange={(event) => handleFilter(event.target.value)} >
                <option value="Todos">Todos</option>
                <option value="Api">Api</option>
                <option value="Db">Db</option>
            </select>
        </div>
    )
}
export default Sort