import { Link, NavLink } from "react-router-dom";
import style from"./Landing.module.css"
const Landing = () => {
    return (
        <div className={style.contain}>
            <NavLink to="/home" className={style.button}>
                <button className={style.editButton}>Entra aqui para la aventura pokemon</button>
            </NavLink>
        </div>
    )
}

export default Landing;