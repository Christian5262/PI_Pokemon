import { useEffect, useRef, useState } from "react";
import Cards from "../../components/cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getsPokemon } from "../../redux/actions";
import Paginate from "../../components/Paginate/Paginate";
import NavBar from "../NavBar/NavBar";
import { useSearchParams } from "react-router-dom";


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
        searchParams.set("page", page )
        setSearchParams(searchParams)
    }


    useEffect(() => {
        dispatch(getsPokemon())
    }, [dispatch])


    return (
        <div>
            <NavBar />
            <Cards pokemonInPage={pokemonInPage} page={page} />
            <Paginate totalPages={totalPages} page={page} handleChangePage={handleChangePage} />
        </div>
    )
}

export default Home;