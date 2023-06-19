import { useDispatch } from "react-redux"
import { getsPokemon, orderPokemons } from "../../redux/actions"
import { useSearchParams } from "react-router-dom";
import { ORDER_PARAM, PAGES } from "../../utils/constants";
const Sort = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch()
    const handleOrder = (value) => {
        searchParams.set(ORDER_PARAM, value)
        searchParams.set(PAGES, 0)
        setSearchParams(searchParams)
        dispatch(getsPokemon())
    }


    return (
        <div>
            <select onChange={(event) => handleOrder(event.target.value)}>
                <option defaultValue disabled>hola</option>
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