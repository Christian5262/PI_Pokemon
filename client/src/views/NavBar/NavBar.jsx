import { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import SearchBar from "../../components/searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getTypes } from "../../redux/actions";
import Sort from "../../components/Sort/Sort";

const NavBar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [])


    return (
        <div>
            <SearchBar />
            <Filter />
            <Sort />
        </div>
    )
}

export default NavBar;