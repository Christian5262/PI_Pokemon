import { useDispatch, useSelector } from "react-redux";
import { getsPokemon } from "../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAM, TYPE_PARAM } from "../../utils/constants";

const Filter = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    //   const [type, setType] = useState("");

    const types = useSelector((state) => state.types);
    //   const allPokemons = useSelector((state) => state.copyPokemon);

    const handleSelect = (value) => {
        searchParams.set(TYPE_PARAM, value);
        searchParams.set("page", 0)
        setSearchParams(searchParams);
        dispatch(
            getsPokemon()
        );
    };

    return (
        <div>
            <label htmlFor="">
                <input type="radio" value="" name="Tipos" onChange={handleSelect} />
                Todos los pokemons
            </label>
            {types?.map((type) => {
                return (
                    <label key={type.id}>
                        {type.name}
                        <input
                            type="radio"
                            onChange={(e) => handleSelect(e.target.value)}
                            name="Tipos"
                            value={type.name}
                        />
                    </label>
                );
            })}
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