import { useDispatch } from "react-redux"
import { orderPokemons } from "../../redux/actions"

const Sort = () => {


    const dispatch = useDispatch()
    const handleOrder = (event) => {
        console.log(event.target.value);
        dispatch(orderPokemons(event.target.value))
    }


    return (
        <div>
            <select onChange={handleOrder}>
                <option defaultValue="All" disabled>hola</option>
                <option value="Restart">Orden por defecto</option>
                <option value="A">A - Z</option>
                <option value="D">Z - A</option>
                <option value="Stronger">Mas fuerte</option>
                <option value="Weaker">Mas debil</option>
            </select>
        </div>
    )
}
export default Sort