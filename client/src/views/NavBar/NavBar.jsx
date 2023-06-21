import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import SearchBar from "../../components/searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import Sort from "../../components/Sort/Sort";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [])


    return (
        <>
            <Link to="/create"><button>Create Pokemon</button></Link>
            <div className={styles.container}>
                <SearchBar />
                <Filter />
                <Sort />
            </div>
        </>
    )
}

export default NavBar;