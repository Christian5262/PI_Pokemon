import { useDispatch, useSelector } from "react-redux";
import { cleanMessage, getsPokemon } from "../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { NAME_PARAM, TYPE_PARAM, PAGES } from "../../utils/constants";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState("")
    const message = useSelector(state => state.errorMessage)


    useEffect(() => {
        if (message) {
            alert(message)
            dispatch(cleanMessage())
        }
    }, [])

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