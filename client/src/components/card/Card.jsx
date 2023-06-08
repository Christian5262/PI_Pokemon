import styles from "./Card.module.css"

const Card = ({ id, name, image, health }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={id} className={styles.imagen}/>
            <h4>{health}</h4>
        </div>
    )
}

export default Card;