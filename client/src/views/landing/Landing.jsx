import { Link, NavLink } from "react-router-dom";
import style from "./Landing.module.css"
import pikachu from "../../images/images (2).jpg"


const Landing = () => {
    return (
        <div className={style.background}>
            <div className={style.contain} >
                <div className={style.text}>
                    <h1>Bienvenidos a la pokeWeb</h1>
                </div>
                <img src={pikachu} alt="" />
                <div className={style.parrafo}>
                    <p>Busca pokemones y crealos!!</p>
                </div>
                <div className={style.button}>
                    <button><Link style={{textDecoration : "none"}} to="/home">Entra a la aventura</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Landing;