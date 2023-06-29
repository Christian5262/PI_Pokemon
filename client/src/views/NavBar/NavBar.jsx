import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import SearchBar from "../../components/searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/actions";
import Sort from "../../components/Sort/Sort";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import logo from "../../images/png-transparent-pokemon-logo-pokemon-nintendo-logo.png"

const NavBar = () => {




    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTypes())
    }, [])




    return (
        <>
            <div className={styles.container}>
                <a href="/" class="logo">
                    <img src={logo} alt="Logo Pokedex" />
                </a>
                <SearchBar />
                <Link to="/create" style={{ textDecoration: "none" }}>
                    <div className={styles.create}>
                        <button>Create Pokemon</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default NavBar;