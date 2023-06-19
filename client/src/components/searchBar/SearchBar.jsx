import { useDispatch } from "react-redux";
import { getsPokemon } from "../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAM, TYPE_PARAM, PAGES } from "../../utils/constants";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.toString());

    const handleChange = (value) => {
        searchParams.set(NAME_PARAM, value);
        searchParams.set(PAGES, 0)
        setSearchParams(searchParams);
        dispatch(getsPokemon({ name: value, type: searchParams.get(TYPE_PARAM) }));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Busca el pokemon"
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;