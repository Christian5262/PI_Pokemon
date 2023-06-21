import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate, useParams, useSearchParams, } from "react-router-dom";
import { cleanDetailPokemon, currentPage, getDetailPokemon } from "../../redux/actions";
import styles from "./Detail.module.css"


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

    console.log(detail.image);


    useEffect(() => {
        dispatch(getDetailPokemon(id))
        return () => dispatch(cleanDetailPokemon())
    }, [id])

    return (
        <div style={{ "background-color": "var(--color-background)" }}>
            <button className={styles.buttonHome} onClick={() => { handleBack() }}>Back To Home</button>
            <div className={styles.pokemon}>

                <div className={styles.numberId}>
                    <h1>{"#" + detail.id}</h1>
                </div>
                <div className={styles.pokemonTypes}>
                    <h3>Hp {detail.health}</h3>
                    <h3>{detail.name}</h3>
                </div>
                <div className={`${styles.pokemonImage}  ${detail.types && styles[detail.types[0]]}`}>
                    <img src={detail.image} alt={detail.name} />
                </div>
                {detail.types?.map(type => <div className={`${styles[type]} ${styles.pokemonType}`} key={type}><h3>
                    {type}
                </h3>
                </div>)}
                <div className={styles.pokemonStats}>

                    <h3>Ataque {detail.attack}</h3>
                    <h3>Defensa {detail.defense}</h3>
                    <h3>Velocidad {detail?.speed}</h3>
                </div>
                <div className={styles.pokemonCondition}>
                    <h4>Altura : {detail.height}</h4>
                    <h4>Peso : {detail.weight}</h4>
                </div>
            </div>
        </div>
    );
}

export default Detail;