import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate, useParams, useSearchParams, } from "react-router-dom";
import { cleanDetailPokemon, currentPage, getDetailPokemon } from "../../redux/actions";


const Detail = () => {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()


    const { id } = useParams()
    const navigate = useNavigate()
    const detail = useSelector(state => state.detailPokemon)
    const dispatch = useDispatch()

    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        dispatch(currentPage(id))
        dispatch(getDetailPokemon(id))
        return () => dispatch(cleanDetailPokemon())
    }, [id])

    const previousPath = localStorage.getItem("previousPath") || "/"
    return (
        <div>

            <button onClick={() => { handleBack() }}>Back To Home</button>
            <h1>{detail.id}</h1>
            <h1>{detail.name}</h1>
            <img src={detail.imagen} alt={detail.name} />
            <h3>{detail.health}</h3>
            <h3>{detail.attack}</h3>
            <h3>{detail.defense}</h3>
            <h3>{detail?.speed}</h3>
            <h3>{detail.height}</h3>
            <h4>{detail.weight}</h4>
            {detail.type?.map(type => <h3 key={detail.id}>
                {type}
            </h3>)}
        </div>
    );
}

export default Detail;