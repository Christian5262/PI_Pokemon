import { useDispatch } from "react-redux"
import { getsPokemon, orderPokemons } from "../../redux/actions"
import { useSearchParams } from "react-router-dom";
import { ORDER_PARAM, PAGES } from "../../utils/constants";
import { useState } from "react";
const Sort = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const [select, setSelect] = useState(searchParams.get(ORDER_PARAM))
    const handleOrder = (value) => {
        searchParams.set(ORDER_PARAM, value)
        searchParams.set(PAGES, 1)
        setSearchParams(searchParams)
        dispatch(getsPokemon())
        setSelect(value)
    }


    return (
        <div>
            <select value={select} onChange={(event) => handleOrder(event.target.value)}>
                <option value="Restart">Orden por defecto</option>
                <option value="A-Z">A - Z</option>
                <option value="Z-A">Z - A</option>
                <option value="STRONGER">Mas fuerte</option>
                <option value="WEAKER">Mas debil</option>
            </select>
        </div>
    )
}
export default Sort