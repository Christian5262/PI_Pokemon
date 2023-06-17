import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({ id, name, imagen, type, page }) => {
    return (
        <Link to={{ pathname: `/home/${id}`, state: page  }}>
            <div>
                <h2>{name}</h2>
                <img src={imagen} alt={id} className={styles.imagen} />
                <h4 className={styles.h4}>{type}</h4>
            </div>
        </Link>
    )
}

export default Card;