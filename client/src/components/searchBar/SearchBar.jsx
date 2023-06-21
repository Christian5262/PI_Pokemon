import { useDispatch } from "react-redux";
import { getsPokemon } from "../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAM, TYPE_PARAM, PAGES } from "../../utils/constants";
import { useState } from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState("")

    console.log(searchParams.toString());

    const handleChange = (value) => {
        setInput(value)
    };

    const onSubmit = (value) => {
        searchParams.set(NAME_PARAM, value);
        searchParams.set(PAGES, 1)
        setSearchParams(searchParams);
        dispatch(getsPokemon(value));
        let from = searchParams.get(NAME_PARAM)
        if (from) {
            searchParams.set(NAME_PARAM, "")
            setSearchParams(searchParams)
            setInput("")
        }
    }

    return (
        <div className={styles.background}>
            <div className={styles.box}>
                    <input
                        type="text"
                        placeholder="Busca el pokemon"
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    />
            </div>
            <div className={styles.buttonBox}>
                <button onClick={() => { onSubmit(input) }}>Enviar</button>
            </div>
        </div>
    );
};

export default SearchBar;