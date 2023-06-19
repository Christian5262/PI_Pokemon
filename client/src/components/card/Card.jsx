import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ pokemon }) => {

    const { id, name, imagen, types } = pokemon

    return (
        <Link to={`/home/${id}`}>
            <div className="card_pokemon">
                <div className="title-contain">
                    <h2 className="h2">{name}</h2>
                </div>
                <div className="image">
                    <img src={imagen} alt={id} className="img" />
                </div>
                {types.map(type => {
                    return (
                        <div className="types_contain">
                            <h4 className={type === "normal" ? "normal" :
                                type === "fire" ? "fire" :
                                    type === "water" ? "water" :
                                        type === "grass" ? "grass" :
                                            type === "electric" ? "electric" :
                                                type === "ice" ? "ice" :
                                                    type === "fighting" ? "fighting" :
                                                        type === "poison" ? "poison" :
                                                        type === "ground" ? "ground" : 
                                                        type === "flying" ? "flying" : 
                                                        type === "psychic" ? "psychic" : 
                                                        type === "bug" ? "bug" : 
                                                        type === "rock " ? "rock " : 
                                                        type === "ghost" ? "ghost" : 
                                                        type === "dark " ? "dark " :
                                                        type === "dragon " ? "dragon " :
                                                        type === "steel " ? "steel " :
                                                        "fairy"
                                                    }>{type}</h4>
                        </div>
                    )
                })}

            </div>
        </Link>
    )
}

export default Card;