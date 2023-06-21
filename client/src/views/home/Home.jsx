import { useEffect, useState } from "react";
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getsPokemon } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import NavBar from "../NavBar/NavBar";
import { useSearchParams } from "react-router-dom";
import { PAGES } from "../../utils/constants";
import "./Home.css"


const Home = () => {


    const dispatch = useDispatch()

    const pokemons = useSelector((state) => state.pokemons)
    // const [page, setPage] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const pokemonInPage = []
    const page = Number(searchParams.get("page"))


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


    useEffect(() => {
        dispatch(getsPokemon())
    }, [dispatch])

    useEffect(() => {
        if (!searchParams.has(PAGES)) {
            searchParams.set(PAGES, 1)
            setSearchParams(searchParams)
        }
    }, [searchParams, setSearchParams])

    return (
        <div className="fondo">
            <NavBar />
            <Cards pokemonInPage={pokemonInPage} page={page} />
            {totalPages > 1 && <Paginate totalPages={totalPages} page={page} handleChangePage={handleChangePage} />}
        </div>
    )
}

export default Home;