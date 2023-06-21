import { Link } from "react-router-dom";
import styles from "./Card.module.css"

const Card = ({ pokemon }) => {

    const { id, name, image, types } = pokemon

    return (
        <Link to={`/home/${id}`} style={{textDecoration : "none"}}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={image} alt={id} />
                </div>
                <div className={`${styles.cardPokemon} ${styles[types[0]]}`}>
                    <div className={styles.titleContain}>
                        <h2>{name}</h2>
                    </div>
                    <div className={styles.typeContainer}>
                        {types.map(type => <TypeCard
                            type={type} />)}
                    </div>
                </div>
            </div>
        </Link>
    )
}
const TypeCard = ({ type }) => {
    return (
        <div className={styles.typesContain}>
            <h4 className={`${styles[type]} ${styles.typeCard}`}>{type}</h4>
        </div>
    )
}

export default Card;
