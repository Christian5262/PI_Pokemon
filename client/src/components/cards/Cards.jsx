import { useSelector } from "react-redux";
import Card from "../card/Card";
import "./Cards.css";
import { useLocation } from "react-router-dom";

const Cards = ({ pokemonInPage, page }) => {


    const pagina = useSelector(state => state.currentPage)



    return (
        <div className="card_list">
            {
                pokemonInPage[page]?.map(pokemon => {
                    return (
                        <Card
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    )
                })
            }
        </div>
    );
}

export default Cards;