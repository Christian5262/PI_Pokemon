import { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { cleanMessage, getsPokemon } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import NavBar from "../NavBar/NavBar";
import { useSearchParams } from "react-router-dom";
import { PAGES } from "../../utils/constants";
import Filter from "../../components/Filter/Filter";
import Sort from "../../components/Sort/Sort";
import styles from "./Home.module.css"
import { isActive } from "../../redux/actions";
import Loader from "../../components/loader/Loader";

const Home = () => {


    const dispatch = useDispatch()

    const pokemons = useSelector((state) => state.pokemons)
    // const [page, setPage] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const pokemonInPage = []
    const page = Number(searchParams.get("page"))

    const message = useSelector(state => state.errorMessage)

    const perPage = 12
    const totalPages = Math.floor(pokemons.length / perPage)
    for (let i = 0; i < pokemons.length; i += perPage) {
        const pokemon = pokemons.slice(i, i + perPage)
        pokemonInPage.push(pokemon)
    }

    const handleChangePage = (page) => {
        searchParams.set(PAGES, page)
        setSearchParams(searchParams)
    }
    console.log(!!message);

    useEffect(() => {
        if (!pokemons.length) {
            dispatch(getsPokemon())
        }
    }, [dispatch])

    useEffect(() => {
        if (!searchParams.has(PAGES)) {
            searchParams.set(PAGES, 1)
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams])

    const [count, setCount] = useState(0)

    const buttonEvent = () => {
        if (count === 1) {
            setCount(-1)
            dispatch(isActive(false))
        }
        else {
            dispatch(isActive(true))
            setCount(+1)
        }
    }

    if (!pokemons.length) {
        return (
            <div className={styles.fondo}>
                <NavBar />
                <Loader />
            </div>
        )
    }

    return (
        <div className={styles.fondo}>
            <NavBar />
            <div className={styles.filtersContainer}>

                <button onClick={() => buttonEvent()}>Filtrar Pokemones</button>
                <Filter />
                <Sort />
            </div>
            <Cards pokemonInPage={pokemonInPage} page={page} />
            <Paginate totalPages={totalPages} page={page} handleChangePage={handleChangePage} />
        </div>
    )


}

export default Home;